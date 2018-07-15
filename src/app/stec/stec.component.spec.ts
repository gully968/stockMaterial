import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StecComponent } from './stec.component';

describe('StecComponent', () => {
  let component: StecComponent;
  let fixture: ComponentFixture<StecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
