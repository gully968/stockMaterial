import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StecConsultaComponent } from './stec-consulta.component';

describe('StecConsultaComponent', () => {
  let component: StecConsultaComponent;
  let fixture: ComponentFixture<StecConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StecConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StecConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
