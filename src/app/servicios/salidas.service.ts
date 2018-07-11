import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Movimientos } from '../clases/movimientos';
import 'rxjs/add/operator/map';
import { MovimientosDetalle } from '../clases/movimientos-detalle';
import { Productos } from '../clases/productos';

@Injectable()

export class SalidasService {
  /* Definicion de variables usadas en el servicio */
  movimientos: Observable<Movimientos[]>;
  movimientosCol: AngularFirestoreCollection<Movimientos>;
  movimientosDoc: AngularFirestoreDocument<Movimientos>;
  movDetalle: Observable<MovimientosDetalle[]>;
  movDetalleDoc: AngularFirestoreDocument<MovimientosDetalle>;
  movDetalleCol: AngularFirestoreCollection<MovimientosDetalle>;
  productoDoc: AngularFirestoreDocument<Productos>;
  productoPrecio: number;

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
  /* Agrega el detalle en otro doc de firestore aparte */
  agregaDetalle(data){
    /* En este caso solamente agrego y el indice lo pone firestore */
    this.afs.collection('movDetalle').add(data);
  }
  /* Esto se usa para obtener los registros del doc detalle de firestore en un observable */
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
  /* Esto elimina el item de detalle */
  eliminaDetalle(item: MovimientosDetalle){
    /* Primero hay que reemplazar la cantidad en productos (sumar la cantidad de entrada para anularla) */
    this.movDetalleDoc = this.afs.doc(`movDetalle/${item.id}`);
    const reempCantProd = item.cantidadEntrada;
    const id = item.producto;
    this.afs.doc(`productos/${id}`).ref.get().then(function(doc) {
      if (doc.exists) {
        const reemplazarCantidad = doc.get('cantidadActual') + reempCantProd;
        doc.ref.update({cantidadActual: reemplazarCantidad});
      } else {
          console.log('No hay datos');
      }
    }).catch(function(error) {
        console.log('Error:', error);
    });
    /* Ahora si elimino el doc */
    this.movDetalleDoc.delete();
  }
  /* Modifica la tabla de productos agregando a la cantidad existente la cantidad de ingreso */
  agregaCantidad(id, cant){
    this.afs.doc(`productos/${id}`).ref.get().then(function(doc) {
      if (doc.exists) {
        const reemplazarCantidad = doc.get('cantidadActual') - cant;
        doc.ref.update({cantidadActual: reemplazarCantidad});
      } else {
          console.log('No hay datos');
      }
    }).catch(function(error) {
        console.log('Error:', error);
    });
  }
  devuelveDetalleComprobante(comp: string) {
   // this.productosCol = this.afs.collection('productos', ref=> ref.where('nombre', '==', item));
   // return this.productosCol;

   this.movDetalleCol = this.afs.collection('movDetalle', ref => ref.where('referencia', '==', comp));
   return this.movDetalleCol;

  }


}
