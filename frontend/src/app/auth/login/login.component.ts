import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
import {LoginService} from "../../services/login.service";
import {UsuarioLoginModel} from "../../models/usuario.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioLoginModel = new UsuarioLoginModel();

  constructor(private auth: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login(form: NgForm) {

    if (form.invalid) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      title: 'Iniciando sesion',
      text: 'Espere por favor...',
    });
    Swal.showLoading();

    this.auth.login(this.usuario)
      .subscribe(resp => {
        console.log(resp);
        Swal.close();
        this.router.navigateByUrl('/medico');
      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'paso algo malo :o',
          text: err.error.error.message
        });
      });


  }

}
