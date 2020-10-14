import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface persona {
  primerNombre: string;
  segundoNombre: string;
  apellido: string;
  segundoApellido: string;
  parentezco: string;

}

const ELEMENT_DATA: persona[] = [
  {primerNombre: 'juan', segundoNombre: 'pablo', apellido: 'ardila', segundoApellido: 'otero', parentezco: 'hijo'}
]

@Component({
  selector: 'app-pacientes-asociados',
  templateUrl: './pacientes-asociados.component.html',
  styleUrls: ['./pacientes-asociados.component.css']
})
export class PacientesAsociadosComponent implements OnInit {

  displayedColumns: string[] = ['primerNombre', 'segundoNombre', 'apellido', 'segundoApellido', 'parentezco'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}
