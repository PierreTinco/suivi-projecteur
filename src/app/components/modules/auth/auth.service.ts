import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../shared/services/alert.service';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private alert : AlertService,private router : Router) { }

  login(email : string, password : string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/user']);
        this.alert.success('Sign-in successful')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.alert.warn(errorMessage);
      });
  }


  create(email : string, password : string){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/user']);
      this.alert.success('Account created')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.alert.warn(errorMessage);
    });
  }




  disconnect(){
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }

}
