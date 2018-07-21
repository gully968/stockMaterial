import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StecCerrarComponent } from './stec-cerrar.component';

describe('StecCerrarComponent', () => {
  let component: StecCerrarComponent;
  let fixture: ComponentFixture<StecCerrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StecCerrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StecCerrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
