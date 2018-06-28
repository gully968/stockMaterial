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
    this.afs.collection('proveedores').add(ProveData);
  }

  getProveedores() {
    return this.afs.collection('proveedores').snapshotChanges();
  }

  delProveedor(proveedor: Proveedores) {
    this.proveedoresDoc = this.afs.doc(`proveedores/${proveedor.id}`);
    this.proveedoresDoc.delete();
  }

  modificaProveedor(proveedor: Proveedores){
    this.proveedoresDoc = this.afs.doc(`proveedores/${proveedor.id}`);
    this.proveedoresDoc.update(proveedor);
  }
}