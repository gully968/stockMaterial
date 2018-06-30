import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Rubros } from '../clases/rubros';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()


export class RubrosService {

  rubrosCol: AngularFirestoreCollection<Rubros>;
  rubrosDoc: AngularFirestoreDocument<Rubros>;
  rubrosObs: Observable<Rubros[]>;

  constructor(private afs: AngularFirestore) { }

  addRubro(rubdata){
    this.afs.collection('rubros').add(rubdata);
  }

  getRubro(){
    return this.afs.collection('rubros').snapshotChanges();
  }

  delRubro(rubro: Rubros){
    this.rubrosDoc = this.afs.doc(`rubros/${rubro.id}`);
    this.rubrosDoc.delete()
  }
  modificaRubro(rubro: Rubros) {
    this.rubrosDoc = this.afs.doc(`rubros/${rubro.id}`);
    this.rubrosDoc.update(rubro);
  }

  getRubrosObservable(){

    this.rubrosObs = this.afs.collection('rubros').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Rubros;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.rubrosObs;
  }
}
