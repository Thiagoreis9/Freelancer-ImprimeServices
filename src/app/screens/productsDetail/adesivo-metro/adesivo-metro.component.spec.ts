import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdesivoMetroComponent } from './adesivo-metro.component';

describe('AdesivoMetroComponent', () => {
  let component: AdesivoMetroComponent;
  let fixture: ComponentFixture<AdesivoMetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdesivoMetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdesivoMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
