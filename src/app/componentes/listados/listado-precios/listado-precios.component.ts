import { Component, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductosService } from '../../../servicios/productos.service';
import { Productos } from '../../../clases/productos';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-listado-precios',
  templateUrl: './listado-precios.component.html',
  styleUrls: ['./listado-precios.component.css']
})
export class ListadoPreciosComponent implements AfterViewInit {
  displayedColumns = ['codigo', 'nombre', 'rubro', 'precioVenta', 'cantidadActual', 'observaciones'];
  dataSource = new MatTableDataSource<Productos>();
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public ps: ProductosService) { }

  ngAfterViewInit(){
    this.ps.getProductosObservable().subscribe(data => {
      this.dataSource.data = data ;
   })
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
   }


  imprimirPDF() {
    // Landscape export, 2×4 inches
  const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    hotfixes: []
    })
    const values = this.dataSource.data;

    let codigo = '';
    let nombre = '';
    let precio = '';
    let x = 22;

    doc.text(10, 10, 'Lista de precios');
    doc.text(10, 14, '============');
    doc.text(10, 20, 'Código');
    doc.text(45, 20, 'Descripción');
    doc.text(166, 20, 'Precio');

    for (const i of values) {

      x = x + 10;

      codigo = i.codigo;
      nombre = i.nombre;
      precio = i.precioVenta.toString();

      doc.text(10,x,codigo);
      doc.text(45,x,nombre);
      doc.text(180,x, precio, {align: 'right'});

    }
    doc.save('prueba.pdf');
  }
}
