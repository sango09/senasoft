import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remitir-medicamentos',
  templateUrl: './remitir-medicamentos.component.html',
  styleUrls: ['./remitir-medicamentos.component.css']
})
export class RemitirMedicamentosComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      documento: ['', [Validators.required]],
      fechaRetiro: ['', [Validators.required]],
      fechaRemicion: ['', [Validators.required]],
      nombreMedicamento : ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

}
