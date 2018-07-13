import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

    /* Login con Twitter */
    loginTwitter(){
      return this.afAuth.auth.signInWithPopup( new firebase.auth.TwitterAuthProvider());
    }
    /* Login con Facebook */
    loginFacebook(){
      return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
    }
    /* Login con google */
    loginGoogle(){
      return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
    }
    /* Crear un usuario nuevo */
    registrarUsuario(email:string, pass:string){
      return new Promise((resolve, reject) => {
        this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
            .then( userdata => resolve(userdata),
            err => reject (err));
      })
    }
  
    /* Login de usuario */
    loginEmail(email:string, pass:string){
      return new Promise((resolve, reject) => {
        this.afAuth.auth.signInWithEmailAndPassword(email, pass)
            .then( userdata => resolve(userdata),
            err => reject (err));
      })
    }
  
    /* Comprobacion de usuario logueado y devuelve data */
    getAuth(){
      return this.afAuth.authState.map ( auth => auth);
    }
    /* Cierra la sesion del usuario */
    logout(){
      return this.afAuth.auth.signOut();
    }
}
