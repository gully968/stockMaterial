import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosDetalleComponent } from './ingresos-detalle.component';

describe('IngresosDetalleComponent', () => {
  let component: IngresosDetalleComponent;
  let fixture: ComponentFixture<IngresosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
