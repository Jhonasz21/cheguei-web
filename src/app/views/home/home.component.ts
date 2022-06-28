import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/model/login-response.model';
import { Login } from 'src/app/model/login.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  login: Login = new Login();
  loginResponse: LoginResponse;


  constructor(private formBuilder: FormBuilder, private router: Router,
    private homeService: HomeService) { }

  ngOnInit(): void {
    this.createForm()
  }

  logar(){

    this.login.usuario = this.loginForm.value.usuario;
    this.login.senha = this.loginForm.value.senha;


    this.homeService.logar(this.login).subscribe((resposta) => {

      this.loginResponse = resposta;
     
      localStorage.setItem('taLogado', "true");
      localStorage.setItem("cpf", this.loginResponse.cliente.cpf)

      window.location.href="/products"
    },
    (error) => {
      let text =  "Usuário ou senha inválido";
    confirm(text);
    })
   

  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      usuario: [''],
      senha: [''],
    })
  }

}
