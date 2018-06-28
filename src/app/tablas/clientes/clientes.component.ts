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
    cuit: '',
  }

  displayedColumns = [ 'codigo', 'nombre' ]
  dataSource = new ClientesDataSource(this.cs);
  esEdicion = false;

  constructor(public cs: ClientesService, public dialogo: MatDialog) { }

 
}

export class ClientesDataSource extends DataSource<any>{
  constructor(private cs: ClientesService) {
    super();
  }
  connect(){
    return actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id, ...data}
    })
  }
  disconnect(){
  }
}
