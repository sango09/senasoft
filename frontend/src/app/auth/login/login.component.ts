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
  user;

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
        Swal.close();
        this.user = resp
        console.log(this.user.user.is_medic)
        if (this.user.user.is_medic === true) {
          console.log('es un medico')
          this.router.navigateByUrl('/medico')
        } else if (this.user.user.is_pacient == true) {
          this.router.navigateByUrl('/paciente')
        }

      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Credentiales invalidas',
          text: err.error.error.message
        });
      });


  }

}
