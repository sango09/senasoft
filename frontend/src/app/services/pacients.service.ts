import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PacientsService {

  url = 'localhost:8000/users/pacients/'

  constructor(private http: HttpClient) { }

  getPacientes(){
    return this.http.get(this.url)
  }
}
