import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StecModificarComponent } from './stec-modificar.component';

describe('StecModificarComponent', () => {
  let component: StecModificarComponent;
  let fixture: ComponentFixture<StecModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StecModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StecModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
