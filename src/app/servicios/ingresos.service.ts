import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
/* Tablas clases a usar para firestore */
import { Proveedores } from '../clases/proveedores';
import { Movimientos } from '../clases/movimientos';
import { Productos } from '../clases/productos';
import 'rxjs/add/operator/map';
@Injectable()

export class IngresosService {
  /* Movimientos */
  movimientosCol: AngularFirestoreCollection<Movimientos>;
  movimientosDoc: AngularFirestoreDocument<Movimientos>;
  movimientosObs: Observable<Movimientos[]>;
  
  constructor(private afs: AngularFirestore) { }

  /* Obtener lista de movimientos */
  getMovimientos() {
    return this.afs.collection('movimientos').snapshotChanges();
  }
  /* Obtener Movimientos observable  */
  getMovimientosObservable() {
    this.movimientosObs = this.afs.collection('movimientos').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Movimientos;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.movimientosObs;
  }


}
