import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface persona {
  idSolicitante: number;
  nombre: string;
  segundoNombre: string;
  apellido: string;
  segundoApellido: string;
  eps: string;
  horaDia: Date;
}

const ELEMENT_DATA: persona[] = [
  {idSolicitante: 1, nombre: 'juan', segundoNombre: 'pablo', apellido: 'ardila', segundoApellido: 'otero', eps: 'compensar', horaDia : new Date("2019-12-20:05:20:30")}
]

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['idSolicitante', 'nombre', 'segundoNombre', 'apellido', 'segundoApellido', 'eps'  , 'horaDia', 'Exportar']
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  ngOnInit(): void {
  }

  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
