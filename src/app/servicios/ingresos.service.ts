import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Movimientos } from '../clases/movimientos';
import 'rxjs/add/operator/map';
import { MovimientosDetalle } from '../clases/movimientos-detalle';

@Injectable()

export class IngresosService {

  movimientos: Observable<Movimientos[]>;
  movimientosCol: AngularFirestoreCollection<Movimientos>;
  movimientosDoc: AngularFirestoreDocument<Movimientos>;
  movDetalle: Observable<MovimientosDetalle[]>;
  movDetalleDoc: AngularFirestoreDocument<MovimientosDetalle>;

  constructor(public afs: AngularFirestore) { 
    this.movimientosCol = this.afs.collection('movEncabezado');
    this.movimientos = this.movimientosCol.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Movimientos;
        data.referencia = a.payload.doc.id;
        return data;
      });
    });
  }

  agregaEncabezado(data: Movimientos){
    /* Si existe modifica y si no existe agrega con id = referencia */
    this.afs.doc(`movEncabezado/${data.referencia}`).set(data);
  }

  agregaDetalle(data){
    /* En este caso solamente agrego y el indice lo pone firestore */
    this.afs.collection('movDetalle').add(data);
  }
  getDetalleObservable(){
    this.movDetalle = this.afs.collection('movDetalle').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as MovimientosDetalle;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.movDetalle;
  }
  eliminaDetalle(item: MovimientosDetalle){

    console.log(this.afs.doc(`movDetalle/${item.id}`));
    this.movDetalleDoc = this.afs.doc(`movDetalle/${item.id}`);
    this.movDetalleDoc.delete();
  }
}
