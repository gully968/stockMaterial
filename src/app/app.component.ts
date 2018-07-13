import { Component, OnInit } from '@angular/core';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public estaLogueado: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;

  title = 'app';

  constructor(public authService: AuthService) { }

  ngOnInit() {

    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.estaLogueado = true;
        this.nombreUsuario = auth.displayName;
        this.fotoUsuario = auth.photoURL;
        if (this.nombreUsuario === null){
           this.nombreUsuario = auth.email;
        } else {
          this.emailUsuario = auth.email;
        }
      } else {
        this.estaLogueado = false;
      }
    })
  }

  logout(){
    this.authService.logout();
  }
}
