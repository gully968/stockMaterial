import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ProveedoresService } from '../../servicios/proveedores.service';


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {

  proveedoresDetalle = {
    codigo: '',
    nombre: '',
    direccion: '',
    telefono: '',
    cuit: ''
  };
  displayedColumns = ['codigo', 'nombre', 'direccion', 'telefono', 'cuit', 'buttons'];
  dataSource = new ProvDataSource(this.ps);

  constructor(public ps: ProveedoresService ) { }

  addProveedor(){
    this.ps.addProveedor(this.proveedoresDetalle);
    this.proveedoresDetalle = {
      codigo: '',
      nombre: '',
      direccion: '',
      telefono: '',
      cuit: ''
    };
  }

  eliminarProveedor(proveedor){

    const response = confirm('Está seguro de eliminar?');

    if (response) {
      this.ps.delProveedor(proveedor);
    }
    return;
  }

}

export class ProvDataSource extends DataSource<any> {
  constructor(private ps: ProveedoresService) {
  super();
  }
  connect() {
    return this.ps.getProveedores().map(actions => {
      return actions.map(a =>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data }
      })
    });
  }
  disconnect() {
  }
}
