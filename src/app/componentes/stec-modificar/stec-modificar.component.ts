import { Component, OnInit } from '@angular/core';
import { StecService } from '../../servicios/stec.service';
import { Observable } from '../../../../node_modules/rxjs';
import { Stec } from '../../clases/stec';

@Component({
  selector: 'app-stec-modificar',
  templateUrl: './stec-modificar.component.html',
  styleUrls: ['./stec-modificar.component.css']
})
export class StecModificarComponent implements OnInit {

  servTec = [];

  constructor(public st: StecService) {
    this.st.getServiciosObservable().subscribe(dataservice => {
      this.servTec = dataservice;
    })
  }

  ngOnInit() {
  }

  verDetalle(item) {
    console.log(item);
  }

}
