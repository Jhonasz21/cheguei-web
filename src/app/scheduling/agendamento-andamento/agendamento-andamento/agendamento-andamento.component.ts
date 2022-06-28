import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento.model';
import { AgendamentoService } from '../../agendamento.service';

@Component({
  selector: 'app-agendamento-andamento',
  templateUrl: './agendamento-andamento.component.html',
  styleUrls: ['./agendamento-andamento.component.css']
})
export class AgendamentoAndamentoComponent implements OnInit {

   andamentoList: Agendamento[]

  constructor(private agendamentoService: AgendamentoService) { }

  ngOnInit(): void {

    let cpf = localStorage.getItem("cpf") as string;
    this.carregarAgendamentosSolicitados(cpf);

    this.carregarAgendamentosAndamento(cpf);
  }

  carregarAgendamentosSolicitados(cpf: string){
    this.agendamentoService.obter_agendamentos_cliente(cpf, "SOLICITADO").subscribe(
      (resposta) => {
        console.log(resposta);
        this.andamentoList = resposta;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  carregarAgendamentosAndamento(cpf: string){
    this.agendamentoService.obter_agendamentos_cliente(cpf, "ANDAMENTO").subscribe(
      (resposta) => {
        console.log(resposta);
        this.andamentoList = this.andamentoList.concat(resposta)
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
