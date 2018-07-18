import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public email:string;
  public password:string;
  public errMsg: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  /* Agregar usuario desde pagina de registro */
  agregarUsuario(){
    this.authService.registrarUsuario(this.email,this.password)
      .then( (res) => {
        this.flashMensaje.show('Usuario Registrado Correctamente',{ cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['/inicio']);
      }).catch( (err) => {
        this.flashMensaje.show(err.message,{ cssClass: 'alert-danger', timeout: 5000 });
      })
  }
}
