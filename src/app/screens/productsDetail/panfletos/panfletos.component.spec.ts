import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanfletosComponent } from './panfletos.component';

describe('PanfletosComponent', () => {
  let component: PanfletosComponent;
  let fixture: ComponentFixture<PanfletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanfletosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanfletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
