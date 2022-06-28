import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {



  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  }

  cadastrarCliente(cliente: Cliente) {
    return this.http.post('https://cheguei-backend.herokuapp.com/clientes', cliente, this.httpOptions)
  }
}
