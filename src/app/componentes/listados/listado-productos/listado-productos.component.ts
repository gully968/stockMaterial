import { Component, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProductosService } from '../../../servicios/productos.service';
import { Productos } from '../../../clases/productos';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements AfterViewInit {

  displayedColumns = ['codigo', 'nombre', 'rubro', 'precioCompra', 'precioVenta', 'cantidadMinima', 'cantidadActual', 'observaciones'];
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

}
