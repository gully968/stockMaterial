import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { RubrosService } from '../../servicios/rubros.service';
import { Rubros } from '../../clases/rubros';
@Component({
  selector: 'app-listado-rubros',
  templateUrl: './listado-rubros.component.html',
  styleUrls: ['./listado-rubros.component.css']
})
export class ListadoRubrosComponent {
  /* displayedColumns = ['codigo', 'nombre']; */
  /* dataSource = new MatTableDataSource(ELEMENT_DATA); */
  /* this.CountryService.GetCountries()
    .subscribe(countries => {
        this.myGridOptions.rowData = countries as CountryData[]
    }) */
  elementos = JSON.stringify(this.rs.getRubro());


  /* applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
   */constructor(public rs: RubrosService) { 
    console.log(this.elementos);
  }


}


