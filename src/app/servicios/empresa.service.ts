import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Empresa } from '../clases/empresa';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()

export class EmpresaService {

  empresaCollection: AngularFirestoreCollection<Empresa>;
  empresaDocument: AngularFirestoreDocument<Empresa>;
  empresaObservable: Observable<Empresa[]>;

  constructor(private afs: AngularFirestore) { }

  getEmpresaObservable(){
    this.empresaObservable = this.afs.collection('datosEmpresa'). snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Empresa;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.empresaObservable;
  }
}
