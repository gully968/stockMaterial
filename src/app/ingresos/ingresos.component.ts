import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service';
import { ProductosService } from '../servicios/productos.service';
import { IngresosService } from '../servicios/ingresos.service';
@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
