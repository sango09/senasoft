import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitirExamenesComponent } from './remitir-examenes.component';

describe('RemitirExamenesComponent', () => {
  let component: RemitirExamenesComponent;
  let fixture: ComponentFixture<RemitirExamenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitirExamenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitirExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
