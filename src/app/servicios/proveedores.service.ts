import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/* import 'rxjs'; */
/* Clase Proveedores */
import { Proveedores } from '../clases/proveedores';
/* Firestore */
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()

export class ProveedoresService {
  proveedoresCol: AngularFirestoreCollection<Proveedores>;
  proveedoresDoc: AngularFirestoreDocument<Proveedores>;
  proveedoresObs: Observable<Proveedores[]>;

  constructor(public afs: AngularFirestore) { 
    this.proveedoresCol = this.afs.collection('proveedores');
    this.proveedoresObs = this.proveedoresCol.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Proveedores;
        data.id = a.payload.doc.id;
        return data;
      })
    });
  }
  listaProveedores() {
    return this.proveedoresObs ;
  }
}
