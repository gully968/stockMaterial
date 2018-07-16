import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmBoxComponent } from '../../../confirm-box.component';
import { RubrosService } from '../../../servicios/rubros.service';

@Component({
  selector: 'app-rubros',
  templateUrl: './rubros.component.html',
  styleUrls: ['./rubros.component.css']
})
export class RubrosComponent {

  dialogRef: MatDialogRef<ConfirmBoxComponent>;

  rubrosDetalle = {
    codigo: '',
    nombre: ''
  }

  displayedColumns = [ 'codigo', 'nombre', 'buttons'];
  dataSource = new RubrosDataSource(this.rs);

  esEdicion = false;

  constructor(public rs: RubrosService, public dialogo: MatDialog) { }
  addRubro(){
    if (this.rubrosDetalle.codigo.length !== 0 &&
        this.rubrosDetalle.nombre.length !== 0)
        {
          this.rs.addRubro(this.rubrosDetalle);
          this.rubrosDetalle = {
            codigo: '',
            nombre: ''
          };
        }
  }

  eliminarRubro(rubro) {
    this.dialogRef = this.dialogo.open(ConfirmBoxComponent, { 
      disableClose: false,
      width: '50%',
      data: {}
      });
    this.dialogRef.componentInstance.confirmMessage = 'Está seguro que desea eliminar el rubro: ' + rubro.nombre;
    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.rs.delRubro(rubro);
      }
      this.dialogRef = null;
      });
  }

  cambioaEditar(){
    this.esEdicion = true;
    }

  editarRubro(valor){
    if (this.esEdicion){
        this.rs.modificaRubro(valor);
        this.esEdicion = false;
    }
  }

}

export class RubrosDataSource extends DataSource<any>{
  constructor(private rs: RubrosService) {
    super();
  }

  connect() {
    return this.rs.getRubro().map(actions => {
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
