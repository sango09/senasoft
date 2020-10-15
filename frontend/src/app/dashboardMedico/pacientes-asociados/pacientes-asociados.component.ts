import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {paciente} from "../../models/paciente.model";
import {PacientsService} from "../../services/pacients.service";

const ELEMENT_DATA: paciente[] = []

@Component({
  selector: 'app-pacientes-asociados',
  templateUrl: './pacientes-asociados.component.html',
  styleUrls: ['./pacientes-asociados.component.css']
})
export class PacientesAsociadosComponent implements OnInit {

  pacients: paciente = new paciente();
  pacientes;

  constructor(private asignados: PacientsService) {
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['nombre', 'segundoNombre', 'apellido', 'segundoApellido', 'parentezco']
  datasource = new MatTableDataSource(ELEMENT_DATA)

  getListPacients() {
    this.asignados.getPacientes()
      .subscribe(resp => {
        this.pacientes = resp
      })
  }
}

