import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalllesFamiliasComponent } from './detallles-familias.component';

describe('DetalllesFamiliasComponent', () => {
  let component: DetalllesFamiliasComponent;
  let fixture: ComponentFixture<DetalllesFamiliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalllesFamiliasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalllesFamiliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
