import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-remitir-incapacidad',
  templateUrl: './remitir-incapacidad.component.html',
  styleUrls: ['./remitir-incapacidad.component.css']
})
export class RemitirIncapacidadComponent implements OnInit {

  
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.formGroup = this.fb.group({
      documento: ['', [Validators.required]],
      fechaIncapacidad: ['', [Validators.required]],
      fechaRemicion: ['', [Validators.required]],
      texto: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

}
