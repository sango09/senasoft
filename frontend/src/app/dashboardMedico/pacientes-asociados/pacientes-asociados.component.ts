import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface persona {
  nombre: string;
  segundoNombre: string;
  apellido: string;
  segundoApellido: string;
  parentezco: string;
}

const ELEMENT_DATA: persona[] = [
  { nombre: 'juan', segundoNombre: 'pablo', apellido: 'ardila', segundoApellido: 'otero', parentezco: 'hijo'}
]

@Component({
  selector: 'app-pacientes-asociados',
  templateUrl: './pacientes-asociados.component.html',
  styleUrls: ['./pacientes-asociados.component.css']
})
export class PacientesAsociadosComponent implements OnInit {



  constructor() { }

  displayedColumns: string[] = ['nombre', 'segundoNombre', 'apellido', 'segundoApellido', 'parentezco']
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
  }

  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
