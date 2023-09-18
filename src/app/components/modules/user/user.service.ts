import { Injectable } from '@angular/core';
import { getAuth, signOut } from "firebase/auth";
import { AlertService } from '../../shared/services/alert.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private alertService: AlertService) { }


  disconnect() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.alertService.success('Sign-out successful.');
    }).catch((error) => {
      this.alertService.error('An error happened.');
    });
  }

}
