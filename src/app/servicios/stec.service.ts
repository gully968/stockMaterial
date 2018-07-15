import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Stec } from '../clases/stec';

@Injectable()


export class StecService {

  sTecObservable: Observable<Stec[]>;
  sTecCollection: AngularFirestoreCollection<Stec>;
  sTecDocument: AngularFirestoreDocument<Stec>;

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

   getServiciosObservable(){
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
}
