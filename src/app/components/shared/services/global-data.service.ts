import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/models/constants';
import { Role } from 'src/app/models/entities/role.model';
import { User } from 'src/app/models/entities/user.model';
import { LoginResponseData } from 'src/app/models/type';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  constructor(private alert : AlertService,private router : Router) { }

  getInfoUserConnected() : User | null{
    let userItem = localStorage.getItem('user')

    if(userItem === null){
      this.alert.info("Please connect to the app")
      this.router.navigate(['/login'])
      localStorage.removeItem('user')
      return null
    }else{
      let userParsed : LoginResponseData = JSON.parse(userItem)
      return userParsed.user
    }
  }

  isAdminWriteRole(){
    let user = this.getInfoUserConnected()
    return user.role.find((el : Role)=>el.nom === Constant.ADMIN_WRITE_ROLE) !== undefined
  }

}
