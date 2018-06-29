import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmBoxComponent } from '../../confirm-box.component';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  dialogRef: MatDialogRef<ConfirmBoxComponent>;

  clientesDetalle = {
    codigo: '',
    nombre: '',
    direccion: '',
    telefono: '',
    cuit: ''
  }

  displayedColumns = [ 'codigo', 'nombre', 'direccion', 'telefono', 'cuit' , 'buttons']
  dataSource = new ClientesDataSource(this.cs);
  esEdicion = false;

  constructor(public cs: ClientesService, public dialogo: MatDialog) { }

  addCliente(){
    if (this.clientesDetalle.codigo.length !== 0 &&
        this.clientesDetalle.nombre.length !== 0 &&
        this.clientesDetalle.direccion.length !==0 
      ) {
         this.cs.addCliente(this.clientesDetalle);
         this.clientesDetalle = {
         codigo: '',
         nombre: '',
         direccion: '',
         telefono: '',
         cuit: ''
       };
      }
  }

eliminarCliente(cliente) {
  this.dialogRef = this.dialogo.open(ConfirmBoxComponent, { 
    disableClose: false,
    width: '50%',
    data: {}
    });
  this.dialogRef.componentInstance.confirmMessage = 'Está seguro que desea eliminar el cliente: ' + cliente.nombre;
  this.dialogRef.afterClosed().subscribe(result => {
    if(result) {
      /* Si desea eliminarlo */
      this.cs.delCliente(cliente);
    }
    this.dialogRef = null;
    });
  }
cambioaEditar(){
  this.esEdicion = true;
  }
editarCliente(valor){

  if (this.esEdicion){
      this.cs.modificaCliente(valor);
      this.esEdicion = false;
    }
  }
}

export class ClientesDataSource extends DataSource<any>{
  constructor(private cs: ClientesService) {
    super();
  }
  connect() {
    return this.cs.getCliente().map(actions => {
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
