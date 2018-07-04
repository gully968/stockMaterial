import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIngresoComponent } from './detalle-ingreso.component';

describe('DetalleIngresoComponent', () => {
  let component: DetalleIngresoComponent;
  let fixture: ComponentFixture<DetalleIngresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleIngresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
