import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface persona {
  idFamilia: number;
  nombre: string;
  segundoNombre: string;
  apellido: string;
  segundoApellido: string;
  eps: string;
}

const ELEMENT_DATA: persona[] = [
  {idFamilia: 1, nombre: 'juan', segundoNombre: 'pablo', apellido: 'ardila', segundoApellido: 'otero', eps: 'compensar'}
]

@Component({
  selector: 'app-detallles-familias',
  templateUrl: './detallles-familias.component.html',
  styleUrls: ['./detallles-familias.component.css']
})
export class DetalllesFamiliasComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['idFamilia','nombre', 'segundoNombre', 'apellido', 'segundoApellido', 'eps', 'desplegar']
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
  }

  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
