import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router} from '@angular/router';
import { AlertService } from '../services/alert.service';


@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
    constructor(private alert : AlertService,private router : Router) { }
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let userItem = localStorage.getItem("user")

          if(userItem != null){
            let userItemParsed = JSON.parse(userItem)
            request = request.clone({
              setHeaders: {
                  'x-access-token': `${userItemParsed.token}`
              }
          });
          }else{
            // this.alert.info("S'il vous plaît, connectez-vous à l'application")
            this.router.navigate(['/login'])
            localStorage.removeItem('user')
        }
            return next.handle(request);
        }
}