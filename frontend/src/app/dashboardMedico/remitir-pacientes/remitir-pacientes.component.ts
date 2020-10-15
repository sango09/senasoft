import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-remitir-pacientes',
  templateUrl: './remitir-pacientes.component.html',
  styleUrls: ['./remitir-pacientes.component.css']
})
export class RemitirPacientesComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.formGroup = this.fb.group({
      documento: ['', [Validators.required]],
      select: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  }

