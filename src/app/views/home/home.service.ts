import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { LoginResponse } from "src/app/model/login-response.model";
import { Login } from 'src/app/model/login.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = "https://cheguei-backend.herokuapp.com/login";

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  };

  logar(login: Login): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.baseUrl, login, this.httpOptions)
      .pipe(catchError(error => {
        console.log('Caught in CatchError. Throwing error')
        throw new Error(error)
      }));
  }


}
