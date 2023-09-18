import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    UserRoutingModule,
    FormsModule  ]
})
export class UserModule { }
