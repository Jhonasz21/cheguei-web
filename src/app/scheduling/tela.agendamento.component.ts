import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Agendamento } from "../model/agendamento.model";
import { Cliente } from "../model/cliente.model";
import { Endereco } from "../model/endereco.model";
import { AgendamentoService } from "./agendamento.service";

@Component({
  selector: "app-agendamento",
  templateUrl: "./tela.agendamento.component.html",
  styleUrls: ["./tela.agendamento.component.css"],
})
export class TelaAgendamentoComponent implements OnInit {
  agendamentoForm: FormGroup = new FormGroup({});
  agendamento: Agendamento = new Agendamento();


  constructor(
    private formBuilder: FormBuilder,
    private agendamentoService: AgendamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.agendamentoForm = this.formBuilder.group({
      data: [""],
      cep: [""],
      logradouro: [""],
      numero: [""],
      complemento: [""],
      cidade: [""],
      estado: [""],
      bairro: [""],
      observacao: [""],
    });
  }

  agendar() {
    this.agendamento.data_agendamento = this.agendamentoForm.value.data;
    this.agendamento.observacao = this.agendamentoForm.value.observacao;

    this.agendamento.endereco = new Endereco();

    this.agendamento.endereco.cep = this.agendamentoForm.value.cep;
    this.agendamento.endereco.cidade = this.agendamentoForm.value.cidade;
    this.agendamento.endereco.estado = this.agendamentoForm.value.estado;
    this.agendamento.endereco.complemento =
      this.agendamentoForm.value.complemento;
    this.agendamento.endereco.numero = this.agendamentoForm.value.numero;
    this.agendamento.endereco.logradouro =
      this.agendamentoForm.value.logradouro;

      let storagedCpf = localStorage.getItem("cpf")

    this.agendamento.cpf_cliente = storagedCpf as string;
    this.agendamento.status = "SOLICITADO";

    console.log(this.agendamento);

    this.agendamentoService.agendar(this.agendamento).subscribe(
      (resposta) => {
        console.log(resposta);
        confirm("Um coletor irá retirar o pacote na data e local agendado")
        this.router.navigate(['/agendamentos-andamento/'+storagedCpf])
      },
      (error) => {
        console.log(error);
        confirm("Houve um problema, tente novamente mais tarde")
      }
    );
  }
}
