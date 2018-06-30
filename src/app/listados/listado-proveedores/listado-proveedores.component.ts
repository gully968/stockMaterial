import { Component, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent } from '@angular/material';
import { ProveedoresService } from '../../servicios/proveedores.service';
import { Proveedores } from '../../clases/proveedores';

@Component({
  selector: 'app-listado-proveedores',
  templateUrl: './listado-proveedores.component.html',
  styleUrls: ['./listado-proveedores.component.css']
})
export class ListadoProveedoresComponent implements AfterViewInit {
  
  displayedColumns = ['codigo', 'nombre', 'direccion', 'telefono', 'cuit'];
  dataSource = new MatTableDataSource<Proveedores>();

  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public ps: ProveedoresService) { }

  ngAfterViewInit() {
    this.ps.getProveedoresObservable().subscribe(data =>{
      this.dataSource.data = data;
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
