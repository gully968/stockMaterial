import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasDetalleComponent } from './salidas-detalle.component';

describe('SalidasDetalleComponent', () => {
  let component: SalidasDetalleComponent;
  let fixture: ComponentFixture<SalidasDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidasDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
