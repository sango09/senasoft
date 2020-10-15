import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesAsociadosComponent } from './pacientes-asociados.component';

describe('PacientesAsociadosComponent', () => {
  let component: PacientesAsociadosComponent;
  let fixture: ComponentFixture<PacientesAsociadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientesAsociadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesAsociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
