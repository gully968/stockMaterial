import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintComprobantesComponent } from './print-comprobantes.component';

describe('PrintComprobantesComponent', () => {
  let component: PrintComprobantesComponent;
  let fixture: ComponentFixture<PrintComprobantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintComprobantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintComprobantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
