import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitirMedicamentosComponent } from './remitir-medicamentos.component';

describe('RemitirMedicamentosComponent', () => {
  let component: RemitirMedicamentosComponent;
  let fixture: ComponentFixture<RemitirMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitirMedicamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitirMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
