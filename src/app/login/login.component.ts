import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
/* Login con mail y password */
loginUsuario(){
  this.authService.loginEmail(this.email, this.password)
      .then( (res) => {
        this.router.navigate(['/inicio']);
        this.flashMensaje.show('Ingreso de usuario correcto.',{ cssClass: 'alert-success', timeout: 5000 });
      }).catch((err)=> {
        this.flashMensaje.show(err.message,{ cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['/login']);
      })
}
/* Login mediante google */
loginGoogle(){
  this.authService.loginGoogle()
      .then((res) => {
        this.router.navigate(['/inicio']);
      }).catch( err => console.log(err.message));
}
/* Login mediante facebook */
loginFacebook(){
  this.authService.loginFacebook()
      .then((res) => {
        this.router.navigate(['/inicio']);
      }).catch( err => console.log(err.message));
}
/* Login con twitter */
loginTwitter(){
  this.authService.loginTwitter()
      .then( (res) => {
        this.router.navigate(['/inicio']);
      }).catch (err => console.log(err.message));
}
}
