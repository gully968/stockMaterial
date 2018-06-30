import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Clientes } from '../clases/clientes';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()

export class ClientesService {

  clientesCol: AngularFirestoreCollection<Clientes>;
  clientesDoc: AngularFirestoreDocument<Clientes>;
  clientesObs: Observable<Clientes[]>;

  constructor(private afs: AngularFirestore) { }
  
  addCliente(clidata){
    this.afs.collection('clientes').add(clidata);
  }

  getCliente(){
    return this.afs.collection('clientes').snapshotChanges();
  }

  delCliente(cliente: Clientes){
    this.clientesDoc = this.afs.doc(`clientes/${cliente.id}`);
    this.clientesDoc.delete();
  }

  modificaCliente(cliente: Clientes){
    this.clientesDoc = this.afs.doc(`clientes/${cliente.id}`);
    this.clientesDoc.update(cliente);
  }

  getClientesObservable(){
    this.clientesObs = this.afs.collection('clientes').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Clientes;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.clientesObs;
  }
}
