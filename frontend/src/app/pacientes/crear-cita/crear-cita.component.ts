import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  formularioCita: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.formularioCita = this.fb.group({
      medico: ['',[Validators.required]],
      usuario: ['',[Validators.required]],
      fecha: ['',[Validators.required]],
      hora: ['',[Validators.required]],
      sintomas: ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

}
