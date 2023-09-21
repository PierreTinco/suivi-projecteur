import { Injectable } from '@angular/core';
import { getAuth, signOut } from "firebase/auth";
import { AlertService } from '../../shared/services/alert.service';
import { HttpClient } from '@angular/common/http';
import { getFunctions, httpsCallable } from "firebase/functions";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private functions = getFunctions();
  private emailFunctionUrl = 'https://us-central1-projetisen-b260b.cloudfunctions.net/sendmail';
  constructor(private alertService: AlertService, private http: HttpClient) {}


  disconnect() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.alertService.success('Sign-out successful.');
      localStorage.clear();
    }).catch((error) => {
      this.alertService.error('An error happened.');
    });
  }

  sendEmail(to: string, subject: string, text: string) {
    const sendMailFunction = httpsCallable(this.functions, 'sendmail');
    return sendMailFunction({ to, subject, text })
      .then((result) => {
        // Lire le résultat de la fonction Cloud.
        return result.data;
      });
  }

}
