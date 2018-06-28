import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ProveedoresService } from '../../servicios/proveedores.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmBoxComponent } from '../../confirm-box.component';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})


export class ProveedoresComponent {

  dialogRef: MatDialogRef<ConfirmBoxComponent>;

  proveedoresDetalle = {
    codigo: '',
    nombre: '',
    direccion: '',
    telefono: '',
    cuit: ''
  };
  displayedColumns = ['codigo', 'nombre', 'direccion', 'telefono', 'cuit', 'buttons'];
  dataSource = new ProvDataSource(this.ps);
  esEdicion = false;

  constructor(public ps: ProveedoresService , public dialogo: MatDialog) { }

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

  eliminarProveedor(proveedor) {
    this.dialogRef = this.dialogo.open(ConfirmBoxComponent, { 
      disableClose: false,
      width: '50%',
      data: {}
    });
    this.dialogRef.componentInstance.confirmMessage = 'Está seguro que desea eliminar el proveedor: ' + proveedor.nombre;
    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        /* Si desea eliminarlo */
        console.log('Registro eliminado')
        this.ps.delProveedor(proveedor);
      } else {
        console.log('Si se presiona cancelar el result es ', result)
      }
      this.dialogRef = null;
    });
  }

  cambioaEditar(dato:any){
    this.esEdicion = true;
    console.log(dato);
  }
  editarProveedor(valor){

    if (this.esEdicion){
      alert(valor.nombre);
    } 
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
