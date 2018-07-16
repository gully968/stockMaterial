import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  public estaLogueado: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;
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
  logout() {
    this.authService.logout();
  }

}
