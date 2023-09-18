import { Component, OnInit } from '@angular/core';
import { GenericTable } from 'src/app/models/generic-components/genericTable.model';
import { getDatabase, ref, get, child } from "firebase/database";
import { Projecteur } from 'src/app/models/entities/role.model';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
messages :any[] = []
  viewAll = true

  data: GenericTable = {
    arrHeader: [
      { name: 'Nom du projecteur', key: 'name' },
      { name: 'Etat de connexion', key: 'connexion', badge: true },
      { name: 'Statut du projecteur', key: 'status', badge: true },
    ],
    arrMainNgFor: [],
    searchBar: {
      placeholder: 'Rechercher un projecteur',
    },
    height: 'max-h-[80vh]'

  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    
    if (user) {
      const db = ref(getDatabase());
      const uid = user.uid;
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          get(child(db, 'users/' + uid)).then((snapshot) => {
            if (snapshot.exists()) {
              for(const [clef, val] of Object.entries(snapshot.val())) {
                this.data.arrMainNgFor.push({
                  name: clef,
                  url: val as string,
                  connexion: '',
                  status:''
                })
              }

              this.data.arrMainNgFor.forEach((el : any)=>{
                this.connect(el);
              })
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
        } else {
          console.log("disconnected")
        }
      });

    }
  }

  connect(projo: Projecteur) {
    const ws = new WebSocket(projo.url);
  
    ws.onmessage = (message) => {
      projo.status = message.data
      console.log(message.data)
    };
  
    ws.onerror = (error) => {
      console.log(`WebSocket error on server `, error);
    };
  }

  disconnectUser() {
    this.userService.disconnect();
    this.router.navigate(['auth'])
  }
}
