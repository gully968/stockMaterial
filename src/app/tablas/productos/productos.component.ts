import { Component, AfterViewInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MatTableDataSource } from '@angular/material';
import { ConfirmBoxComponent } from '../../confirm-box.component';
import { RubrosService } from '../../servicios/rubros.service';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements AfterViewInit {

  dialogRef: MatDialogRef<ConfirmBoxComponent>;

  productosDetalle = {
    codigo: '',
    nombre: '',
    rubro: '',
    precioCompra: 0,
    precioVenta: 0,
    cantidadMinima: 0,
    cantidadActual: 0,
    observaciones: ''
  };

  displayedColumns = [
    'codigo',
    'nombre',
    'rubro',
    'precioCompra',
    'precioVenta',
    'cantidadMinima',
    'cantidadActual',
    'observaciones',
    'buttons'];

  dataSource = new ProductosDataSource(this.ps);
  dataRubros = [];

  esEdicion = false;

  constructor(public ps: ProductosService, public dialogo: MatDialog, public rubser: RubrosService) { }
  ngAfterViewInit(){
    this.rubser.getRubrosObservable().subscribe(data => { 
      this.dataRubros = data;
    })

  }

  addProducto(){
    if (this.productosDetalle.codigo.length !== 0 &&
        this.productosDetalle.nombre.length !== 0 &&
        this.productosDetalle.rubro.length !== 0)
        {
          this.ps.addProducto(this.productosDetalle);
          this.productosDetalle = {
            codigo: '',
            nombre: '',
            rubro: '',
            precioCompra: 0,
            precioVenta: 0,
            cantidadMinima: 0,
            cantidadActual: 0,
            observaciones: ''
          };
        }
  }

  eliminarProducto(producto) {
    this.dialogRef = this.dialogo.open(ConfirmBoxComponent, { 
      disableClose: false,
      width: '50%',
      data: {}
      });
    this.dialogRef.componentInstance.confirmMessage = 'Está seguro que desea eliminar el producto: ' + producto.nombre;
    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.ps.delProducto(producto);
      }
      this.dialogRef = null;
      });
  }

  cambioaEditar(){
    this.esEdicion = true;
    }

  editarProducto(valor) {
    if (this.esEdicion) {
      this.ps.modificaProducto(valor);
      this.esEdicion = false;
    }
  }

}

export class ProductosDataSource extends DataSource<any>{
  constructor(private ps: ProductosService) {
    super();
  }

  connect() {
    return this.ps.getProductos().map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id, ...data}
      });
    });
  }

  disconnect() {
  }
}

