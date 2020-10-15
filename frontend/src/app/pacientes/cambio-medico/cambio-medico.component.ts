import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambio-medico',
  templateUrl: './cambio-medico.component.html',
  styleUrls: ['./cambio-medico.component.css']
})
export class CambioMedicoComponent implements OnInit {

  user: any = 
    {
      id: 1001202486,
      name: "Juan",
      lastName: "Cadavid",
    }
  
    doctor: any = 
    {
      id: 200034021,
      name: "Doctorin",
      lastName: "Doctorado"
    }

  constructor() { }

  ngOnInit(): void {
  }

}
