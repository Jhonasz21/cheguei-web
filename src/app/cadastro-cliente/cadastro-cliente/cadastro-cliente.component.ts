import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Cliente } from "src/app/model/cliente.model";
import { Endereco } from "src/app/model/endereco.model";
import { Login } from "src/app/model/login.model";
import { ClienteService } from "../cliente.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-cadastro-cliente",
  templateUrl: "./cadastro-cliente.component.html",
  styleUrls: ["./cadastro-cliente.component.css"],
})
export class CadastroClienteComponent implements OnInit {
  cadastroClienteForm: FormGroup = new FormGroup({});
  cliente: Cliente = new Cliente();

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.cadastroClienteForm = this.formBuilder.group({
      nome: [""],
      cpf: [""],
      nascimento: [""],
      telefone: [""],
      estado: [""],
      cidade: [""],
      logradouro: [""],
      numero: [""],
      complemento: [""],
      cep: [""],
      referencia: [""],
      usuario: [""],
      senha: [""],
    });
  }

  cadastrarCliente() {
    console.log("entrei no cadastrar");

    this.cliente.nome = this.cadastroClienteForm.value.nome;
    this.cliente.cpf = this.cadastroClienteForm.value.cpf;
    this.cliente.nascimento = this.cadastroClienteForm.value.nascimento;
    this.cliente.telefone = this.cadastroClienteForm.value.telefone;
    this.cliente.perfil = "CLIENTE";

    this.cliente.endereco = new Endereco();

    this.cliente.endereco.logradouro =
      this.cadastroClienteForm.value.logradouro;
    this.cliente.endereco.cep = this.cadastroClienteForm.value.cep;
    this.cliente.endereco.referencia =
      this.cadastroClienteForm.value.referencia;
    this.cliente.endereco.numero = this.cadastroClienteForm.value.numero;
    this.cliente.endereco.estado = this.cadastroClienteForm.value.estado;
    this.cliente.endereco.cidade = this.cadastroClienteForm.value.cidade;
    this.cliente.endereco.complemento =
      this.cadastroClienteForm.value.complemento;

    this.cliente.login = new Login();

    this.cliente.login.usuario = this.cadastroClienteForm.value.usuario;
    this.cliente.login.senha = this.cadastroClienteForm.value.senha;

    this.clienteService.cadastrarCliente(this.cliente).subscribe((data) => {
      console.log(data);

      let text =
        "Cadastro realizado com sucesso! Agora faça login para navegar no sistema";
      confirm(text);
      window.location.href = "login";
    });
  }

  voltar(): void {
    this.location.back();
  }
}
