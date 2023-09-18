import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/modules/auth/auth.service';
import { initializeApp } from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  firebaseConfig = {
    apiKey: "AIzaSyCtXW5n73Gymfg1nbSAjjdsj_RmOeRBYe0",
    authDomain: "projetisen-b260b.firebaseapp.com",
    projectId: "projetisen-b260b",
    storageBucket: "projetisen-b260b.appspot.com",
    messagingSenderId: "889070790079",
    appId: "1:889070790079:web:13872a99125dbd961d6d0a",
    measurementId: "G-ZM60586BL5"
  };
  constructor(private authService : AuthService){

  }
  ngOnInit(){
    initializeApp(this.firebaseConfig);
  }
}
