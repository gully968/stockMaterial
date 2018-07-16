import { Component, OnInit } from '@angular/core';
import { IngresosService } from '../../servicios/ingresos.service';
import { SalidasService } from '../../servicios/salidas.service';
import { ProductosService } from '../../servicios/productos.service';
import { RubrosService } from '../../servicios/rubros.service';
import { ProveedoresService } from '../../servicios/proveedores.service';
import { ClientesService } from '../../servicios/clientes.service';
import { EmpresaService } from '../../servicios/empresa.service';

@Component({
  selector: 'app-print-comprobantes',
  templateUrl: './print-comprobantes.component.html',
  styleUrls: ['./print-comprobantes.component.css']
})

export class PrintComprobantesComponent implements OnInit {

  movIngresosDetalle = [];
  movIngresos = [];
  movSalidasDetalle = [];
  movSalidas = [];
  productos = [];
  proveedores = [];
  clientes = [];
  
  
  constructor(public ingserv: IngresosService,
              public salserv: SalidasService,
              public prodserv: ProductosService,
              public rubserv: RubrosService,
              public provserv: ProveedoresService,
              public cliserv: ClientesService,
              public emp: EmpresaService) { }

  ngOnInit() {
    /* Creo los observables para cada cosa por separado */
    this.provserv.getProveedoresObservable().subscribe(dataprov => {
      this.proveedores = dataprov;
    });
    this.prodserv.getProductosObservable().subscribe(dataprod => {
      this.productos = dataprod;
    });
    
  }
  
}
