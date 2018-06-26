import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../servicios/proveedores.service.ts';
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor(private provserv: ProveedoresService) { }

  ngOnInit() {
    this.listaprov = this.provserv.listaProveedores();
    console.log(this.listaprov);
  }

}
