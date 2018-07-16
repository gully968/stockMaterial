import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRubrosComponent } from './listado-rubros.component';

describe('ListadoRubrosComponent', () => {
  let component: ListadoRubrosComponent;
  let fixture: ComponentFixture<ListadoRubrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoRubrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRubrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
