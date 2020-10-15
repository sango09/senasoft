import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsuarioLoginModel} from '../models/usuario.model';
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8000/users/login/';
  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  login(usuario: UsuarioLoginModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}`,
      authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }


  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString());

  }


  leerToken() {
    if (localStorage.getItem('access_token')) {
      this.userToken = localStorage.getItem('access_token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean {

    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    return expiraDate > new Date();

  }

}
