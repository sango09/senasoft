import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRemitidosComponent } from './lista-remitidos.component';

describe('ListaRemitidosComponent', () => {
  let component: ListaRemitidosComponent;
  let fixture: ComponentFixture<ListaRemitidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRemitidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRemitidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
