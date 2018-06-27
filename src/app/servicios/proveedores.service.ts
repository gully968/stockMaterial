import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/* Clase Proveedores */
import { Proveedores } from '../clases/proveedores';
/* Firestore */
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()

export class ProveedoresService {
  
  proveedoresCol: AngularFirestoreCollection<Proveedores>;
  proveedoresDoc: AngularFirestoreDocument<Proveedores>;
  proveedoresObs: Observable<Proveedores[]>;

  constructor(private afs: AngularFirestore) { }

  addProveedor(ProveData) {
    if (ProveData) {
      this.afs.collection('proveedores').add(ProveData);
    } else {
      console.log('No es posible agregar porque el registro se encuentra vacio');
    }
  }

  getProveedores() {
    return this.afs.collection('proveedores').snapshotChanges();
  }

  delProveedor(proveedor: Proveedores) {
    this.proveedoresDoc = this.afs.doc(`proveedores/${proveedor.id}`);
    this.proveedoresDoc.delete();
  }
}