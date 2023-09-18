import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [LoginComponent, CreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    FormsModule
  ],exports : [LoginComponent]
})
export class AuthModule { }
