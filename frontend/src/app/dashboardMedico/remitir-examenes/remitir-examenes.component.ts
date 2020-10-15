import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-remitir-examenes',
  templateUrl: './remitir-examenes.component.html',
  styleUrls: ['./remitir-examenes.component.css']
})
export class RemitirExamenesComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.formGroup = this.fb.group({
      documento: ['', [Validators.required]],
      fechaExamen: ['', [Validators.required]],
      fechaRemicion: ['', [Validators.required]],
      nombreExamen: ['', [Validators.required]],
      texto: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

}
