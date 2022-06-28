import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Agendamento } from "../model/agendamento.model";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AgendamentoService {
  baseUrl = "https://cheguei-backend.herokuapp.com/agendamentos";

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  };

  agendar(agendamento: Agendamento): Observable<Agendamento> {
    return this.http
      .post<Agendamento>(this.baseUrl, agendamento, this.httpOptions)
      .pipe( catchError(error => {
        console.log('Caught in CatchError. Throwing error')
        throw new Error(error)
      }));
  }

  obter_agendamentos_cliente(cpf: string, status: string): Observable<Agendamento[]> {
    return this.http
    .get<Agendamento[]>(this.baseUrl+"/clientes/"+cpf+"?status="+status, this.httpOptions)
      .pipe( catchError(error => {
        console.log('Caught in CatchError. Throwing error')
        throw new Error(error)
      }));
  }

}
