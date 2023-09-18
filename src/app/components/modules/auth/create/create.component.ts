import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  email = ""
  password = ""

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  create(){
    this.authService.create(this.email,this.password)
  }

}
