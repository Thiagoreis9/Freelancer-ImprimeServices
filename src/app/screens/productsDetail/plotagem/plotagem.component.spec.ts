import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotagemComponent } from './plotagem.component';

describe('PlotagemComponent', () => {
  let component: PlotagemComponent;
  let fixture: ComponentFixture<PlotagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
