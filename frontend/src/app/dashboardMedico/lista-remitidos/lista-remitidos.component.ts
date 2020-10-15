import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface persona {
  nombre: string;
  segundoNombre: string;
  apellido: string;
  segundoApellido: string;
  eps: string;
  remitente: string;
}

const ELEMENT_DATA: persona[] = [
  {nombre: 'juan', segundoNombre: 'pablo', apellido: 'ardila', segundoApellido: 'otero', eps: 'compensar', remitente: 'santiago'},
]

@Component({
  selector: 'app-lista-remitidos',
  templateUrl: './lista-remitidos.component.html',
  styleUrls: ['./lista-remitidos.component.css']
})
export class ListaRemitidosComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['nombre', 'segundoNombre', 'apellido', 'segundoApellido', 'eps', 'exportar', 'remitente']
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
  }

  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
