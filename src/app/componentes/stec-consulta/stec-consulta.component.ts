import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent, matTabsAnimations } from '@angular/material';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Stec } from '../../clases/stec';
import { StecService } from '../../servicios/stec.service';


@Component({
  selector: 'app-stec-consulta',
  templateUrl: './stec-consulta.component.html',
  styleUrls: ['./stec-consulta.component.css']
})
export class StecConsultaComponent implements AfterViewInit {

  displayedColumns = [ 'fechaIngreso', 'fechaRevision', 'cliente', 'equipo', 'fallaDeclarada', 'estaReparado' ];
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
  }
}
