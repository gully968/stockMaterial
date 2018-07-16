import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { RubrosService } from '../../../servicios/rubros.service';
import { Rubros } from '../../../clases/rubros';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-listado-rubros',
  templateUrl: './listado-rubros.component.html',
  styleUrls: ['./listado-rubros.component.css']
})
export class ListadoRubrosComponent implements AfterViewInit {

  displayedColumns = ['codigo', 'nombre'];
  dataSource = new MatTableDataSource<Rubros>();

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public rs: RubrosService) {}

  ngAfterViewInit() {
    this.rs.getRubrosObservable().subscribe(data => {
      this.dataSource.data = data;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
