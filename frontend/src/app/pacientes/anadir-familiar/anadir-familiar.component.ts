import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-anadir-familiar',
  templateUrl: './anadir-familiar.component.html',
  styleUrls: ['./anadir-familiar.component.css']
})
export class AnadirFamiliarComponent implements OnInit {

  formularioAnadir: FormGroup;

  constructor( private frmBuilder: FormBuilder ) { 
    this.formularioAnadir = this.frmBuilder.group({
      tipoId: ['',[Validators.required]],
      nit: ['',[Validators.required]],
      name: ['',[Validators.required,Validators.pattern("[a-zA-Z ]{4,45}")]],
      lastName: ['',[Validators.required,Validators.pattern("[a-zA-Z ]{4,45}")]],
      parentezco: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

}
