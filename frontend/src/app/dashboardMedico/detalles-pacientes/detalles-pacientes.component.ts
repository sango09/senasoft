import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface persona {
  nombre: string;
  segundoNombre: string;
  apellido: string;
  segundoApellido: string;
  email: string;
  eps: string;
}

const ELEMENT_DATA: persona[] = [
  {segundoNombre: 'santiago', nombre: 'santiago', apellido: 'gomez', segundoApellido: 'florez', email: 'nose123@gmail.com', eps: 'famisanar'},
  {segundoNombre: 'juan', nombre: 'santiago', apellido: 'gomez', segundoApellido: 'florez', email: 'nose123@gmail.com', eps: 'famisanar' },
]

@Component({
  selector: 'app-detalles-pacientes',
  templateUrl: './detalles-pacientes.component.html',
  styleUrls: ['./detalles-pacientes.component.css']
})
export class DetallesPacientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['nombre', 'segundoNombre',  'apellido', 'segundoApellido', 'email', 'eps', 'export'];
  dataSource = new MatTableDataSource(ELEMENT_DATA)

  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
