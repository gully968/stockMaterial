import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Clientes } from '../clases/clientes';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Productos } from '../clases/productos';

@Injectable()

export class ProductosService {

  productosCol: AngularFirestoreCollection<Productos>;
  productosDoc: AngularFirestoreDocument<Productos>;
  productosObs: Observable<Productos[]>;

  constructor(private afs: AngularFirestore) { }

  addProducto(proData) {
    this.afs.collection('productos').add(proData);
  }

  getProductos() {
    return this.afs.collection('productos').snapshotChanges();
  }

  delProducto(producto: Productos) {
    this.productosDoc = this.afs.doc(`productos/${producto.id}`);
    this.productosDoc.delete();
  }

  modificaProducto(producto: Productos) {
    this.productosDoc = this.afs.doc(`productos/${producto.id}`);
    this.productosDoc.update(producto)
  }

  getProductosObservable() {
    this.productosObs = this.afs.collection('productos').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Productos;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.productosObs;
  }
}
