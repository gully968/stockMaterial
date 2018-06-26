import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProveedoresService } from '../../servicios/proveedores.service';
import { Proveedores } from '../../clases/proveedores';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  listaprov: Observable<Proveedores[]>;

  constructor(public ps: ProveedoresService) { }

  ngOnInit() {
    dataSource = new MatTableDataSource(listaprov);
    displayedColumns = ['id', 'nombre', 'direccion', 'telefono'];
    this.listaprov = this.ps.listaProveedores();
    console.log(this.listaprov);
   }
}
