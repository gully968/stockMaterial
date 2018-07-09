import { Component, ViewChild, Input } from '@angular/core';
import { IngresosService } from '../../servicios/ingresos.service';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { MovimientosDetalle } from '../../clases/movimientos-detalle';
import { AfterViewInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-ingresos-detalle',
  templateUrl: './ingresos-detalle.component.html',
  styleUrls: ['./ingresos-detalle.component.css']
})
export class IngresosDetalleComponent implements AfterViewInit, OnChanges {

  displayedColumns = [ 'referencia','producto', 'cantidadEntrada', 'precioEntrada', 'buttons']
  dataSource = new MatTableDataSource<MovimientosDetalle>();

  length = 100;
  pageSize = 4;
  pageSizeOptions: number[] = [4, 10, 25, 100];
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input () referencia: string;
  @Input () idProducto: string;

  constructor(public ingserv: IngresosService) { }

  ngAfterViewInit(){
    this.ingserv.getDetalleObservable().subscribe(data => {
      this.dataSource.data = data;
    })
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnChanges() {
    this.applyFilter(this.referencia);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  eliminarItem(item){
    this.ingserv.eliminaDetalle(item);
  }

}
