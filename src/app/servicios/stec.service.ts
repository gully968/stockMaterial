import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Stec } from '../clases/stec';

@Injectable()


export class StecService {

  sTecObservable: Observable<Stec[]>;
  sTecCollection: AngularFirestoreCollection<Stec>;
  sTecDocument: AngularFirestoreDocument<Stec>;
  sTecArray: Stec[];

  constructor(public afs: AngularFirestore) {
    this.sTecCollection = this.afs.collection('servicioTecnico');
    this.sTecObservable = this.sTecCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Stec;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

   getServiciosObservable() {
    return this.sTecObservable;
   }

   agregaServicio(datos: Stec) {
     this.afs.collection('servicioTecnico').add(datos);
   }

   eliminaServicio(item: Stec){
    this.sTecDocument = this.afs.doc(`servicioTecnico/${item.id}`);
    this.sTecDocument.delete();
   }
   modificaServicio(servicio: Stec){
     this.sTecDocument = this.afs.doc(`servicioTecnico/${servicio.id}`);
     this.sTecDocument.update(servicio);
   }
   devuelveDetalleServicio (id: string){

   }
   devuelveDocServicio (id: string) {
    return this.afs.collection('servicioTecnico')
                .doc(id)
                .ref
                .get()
                .then(function(doc) {
                  if (doc.exists) {
                    console.log('Datos:', doc.data());
                    return Promise.resolve(doc.data());
                  } else {
                    console.log('No Existe Documento!');
                  }
                })
                .catch(function(error) {
                  console.log('Error obteniendo Documento:', error);
                });
   }
}