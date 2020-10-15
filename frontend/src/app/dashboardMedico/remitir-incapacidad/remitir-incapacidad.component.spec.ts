import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitirIncapacidadComponent } from './remitir-incapacidad.component';

describe('RemitirIncapacidadComponent', () => {
  let component: RemitirIncapacidadComponent;
  let fixture: ComponentFixture<RemitirIncapacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitirIncapacidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitirIncapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
