import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtenderCitaComponent } from './atender-cita.component';

describe('AtenderCitaComponent', () => {
  let component: AtenderCitaComponent;
  let fixture: ComponentFixture<AtenderCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtenderCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtenderCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
