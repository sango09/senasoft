import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioMedicoComponent } from './cambio-medico.component';

describe('CambioMedicoComponent', () => {
  let component: CambioMedicoComponent;
  let fixture: ComponentFixture<CambioMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
