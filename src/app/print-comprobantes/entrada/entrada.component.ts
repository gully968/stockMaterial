import { Component, ViewChild } from '@angular/core';
import { IngresosService } from '../../servicios/ingresos.service';
import { Movimientos } from '../../clases/movimientos';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements AfterViewInit {

  displayedColumns = ['tipoMovimiento', 'fecha', 'referencia', 'proveedor', 'observaciones'];
  dataSource = new MatTableDataSource<Movimientos>();
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public ingserv: IngresosService) { }

  ngAfterViewInit(){
    this.ingserv.getIngresos().subscribe(data => {
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
