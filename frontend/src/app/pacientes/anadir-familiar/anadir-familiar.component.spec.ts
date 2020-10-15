import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirFamiliarComponent } from './anadir-familiar.component';

describe('AnadirFamiliarComponent', () => {
  let component: AnadirFamiliarComponent;
  let fixture: ComponentFixture<AnadirFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirFamiliarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
