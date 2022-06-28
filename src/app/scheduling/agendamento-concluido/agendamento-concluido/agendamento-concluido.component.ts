import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/model/agendamento.model';
import { AgendamentoService } from '../../agendamento.service';

@Component({
  selector: 'app-agendamento-concluido',
  templateUrl: './agendamento-concluido.component.html',
  styleUrls: ['./agendamento-concluido.component.css']
})
export class AgendamentoConcluidoComponent implements OnInit {

  concluidoList: Agendamento[]


  constructor(private agendamentoService: AgendamentoService) { }

  ngOnInit(): void {

    let cpf = localStorage.getItem("cpf") as string;

    this.agendamentoService.obter_agendamentos_cliente(cpf, "CONCLUIDO").subscribe(
      (resposta) => {
        console.log(resposta);
        this.concluidoList = resposta;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
