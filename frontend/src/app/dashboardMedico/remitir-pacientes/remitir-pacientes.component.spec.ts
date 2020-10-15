import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitirPacientesComponent } from './remitir-pacientes.component';

describe('RemitirPacientesComponent', () => {
  let component: RemitirPacientesComponent;
  let fixture: ComponentFixture<RemitirPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitirPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitirPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
