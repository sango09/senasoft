import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { usuario } from '../../models/usuario.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: usuario = new usuario();

  constructor() { }

  ngOnInit(): void {
  }

  login (form: NgForm){

    if(form.invalid){ return;}
  } 

}
