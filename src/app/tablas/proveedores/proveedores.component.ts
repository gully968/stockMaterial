import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ProveedoresService } from '../../servicios/proveedores.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

/* export interface DialogData {
  animal: string;
  name: string;
} */

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

  constructor(public ps: ProveedoresService/* , public dialogo: MatDialog */ ) { }

  addProveedor(){
    if (this.proveedoresDetalle.codigo.length !== 0 && 
        this.proveedoresDetalle.nombre.length !== 0 &&
        this.proveedoresDetalle.direccion.length !== 0
      ) {
        this.ps.addProveedor(this.proveedoresDetalle);
        this.proveedoresDetalle = {
          codigo: '',
          nombre: '',
          direccion: '',
          telefono: '',
          cuit: ''
        };
      }
  }

  eliminarProveedor(proveedor){

    const response = confirm('Está seguro de eliminar?');

    if (response) {
      this.ps.delProveedor(proveedor);
    }
    return;
  }

  /* openDialog(): void {
    const dialogRef = this.dialogo.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  } */
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
