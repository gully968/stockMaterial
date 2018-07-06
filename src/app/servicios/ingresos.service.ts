import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class IngresosService {

  constructor(public afs: AngularFirestore) { 

  }

  agregaEncabezado(data){
    this.afs.collection('movEncabezado').add(data);
  }
  agregaDetalle(data){
    this.afs.collection('movDetalle').add(data);
  }
  /* Muestra solamente los productos de un comprobante especifico */
  muestraDetalle(ref) {
    return this.afs.collection('movDetalle', funcion => funcion.where('referencia', '==', ref)).valueChanges();
  }
  
}
