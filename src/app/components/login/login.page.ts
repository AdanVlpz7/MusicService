import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
import { Router } from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //variables leidas en login.page.html en los ion-input
  email: string;
  password :string;

  constructor(private authService : AuthService, public router : Router) { }

  ngOnInit() {
  }

  OnSubmitLogin(){
    //va a llamar a la promesa en auth.service.ts , y si se resuelve, ir a /Home
    this.authService.login(this.email,this.password).then(res =>{
      this.router.navigate(['/home'])
    }).catch(err => alert('Los datos son incorrectos'))
  }
}
