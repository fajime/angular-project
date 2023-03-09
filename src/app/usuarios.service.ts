import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  Products$ : BehaviorSubject<any[]>;

  constructor( private http: HttpClient) {
    this.Products$ = new BehaviorSubject<any[]>([]);
  }

  getUsuarios() {
    return this.http.get('http://reqres.in/api/users?page=2');
  }

  createPost () {
    const body = {
      "name": "morpheus",
      "job": "leader"
    };

    const headers = { 'content-type': 'application/json'}  
    const bodyObj = JSON.stringify(body);
    return this.http.post<any>('http://reqres.in/api/posts', bodyObj, {headers})
  }
}
