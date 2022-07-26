import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl("");
  password = new FormControl("");

  constructor() { }
  
  login() {
    console.log(this.email.value);
    console.log(this.password.value);
  }
  
  ngOnInit(): void {
  }

}
