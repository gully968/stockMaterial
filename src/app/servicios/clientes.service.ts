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
    this.clientesDoc = this.afs.doc('clientes/${cliente.id}');
    this.clientesDoc.delete();
  }

  modificaCliente(cliente: Clientes){
    this.clientesDoc = this.afs.doc('clientes/${cliente.id}');
    this.clientesDoc.update(cliente);
  }
}
