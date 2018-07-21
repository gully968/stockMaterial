import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent, matTabsAnimations } from '@angular/material';
import { Stec } from '../../clases/stec';
import { StecService } from '../../servicios/stec.service';

@Component({
  selector: 'app-stec-cerrar',
  templateUrl: './stec-cerrar.component.html',
  styleUrls: ['./stec-cerrar.component.css']
})
export class StecCerrarComponent implements AfterViewInit {

  displayedColumns = [ 'fechaIngreso', 'fechaRevision', 'cliente', 'equipo', 'fallaDeclarada', 'estaReparado', 'boton' ];
  dataSource = new MatTableDataSource<Stec>();
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public stec: StecService) { }

  ngAfterViewInit() {
    this.stec.getServiciosObservable().subscribe(data => {
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

  cambioReparado(item) {

    const fechaActual = new Date, 
          dia = fechaActual.getDay().toString(),
          mes = fechaActual.getMonth() + 1,
          anio = fechaActual.getFullYear().toString(),
          id = item.idReparacion;

    const cadenaFechaActual = dia + '/' + mes.toString() + '/' + anio;
    item.estaReparado = true;
    item.fechaEgreso = cadenaFechaActual;

    this.stec.modificaServicio(id, item);
  }
}
