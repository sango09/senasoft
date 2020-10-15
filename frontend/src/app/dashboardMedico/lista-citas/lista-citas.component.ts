import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface persona {
  documento: number;
  nombre: string;
  segundoNombre: string;
  apellido: string;
  segundoApellido: string;
  eps: string;
  horaDia: Date;
}

const ELEMENT_DATA: persona[] = [
  {documento: 123131223, nombre: 'juan', segundoNombre: 'pablo', apellido: 'ardila', segundoApellido: 'otero', eps: 'compensar', horaDia : new Date("2019-12-12")}
]

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['documento', 'nombre', 'segundoNombre', 'apellido', 'segundoApellido', 'eps'  , 'horaDia', 'Exportar', 'Iracitamedica']
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  ngOnInit(): void {
  }

  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
