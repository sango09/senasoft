import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMedicoComponent } from './main-medico.component';

describe('MainMedicoComponent', () => {
  let component: MainMedicoComponent;
  let fixture: ComponentFixture<MainMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
