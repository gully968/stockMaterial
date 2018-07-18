import { Component, OnInit } from '@angular/core';
import { StecService } from '../../servicios/stec.service';

@Component({
  selector: 'app-stec-modificar',
  templateUrl: './stec-modificar.component.html',
  styleUrls: ['./stec-modificar.component.css']
})
export class StecModificarComponent implements OnInit {

  servicioTecnico = [];

  constructor(public st: StecService) { }

  ngOnInit() {
  }


}
