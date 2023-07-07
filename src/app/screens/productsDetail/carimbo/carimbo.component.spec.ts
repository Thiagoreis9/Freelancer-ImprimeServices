import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarimboComponent } from './carimbo.component';

describe('CarimboComponent', () => {
  let component: CarimboComponent;
  let fixture: ComponentFixture<CarimboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarimboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarimboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
