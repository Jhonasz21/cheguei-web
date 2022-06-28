import { Cliente } from "./cliente.model";
import { Endereco } from "./endereco.model";

export class Agendamento {

     data_agendamento: Date;
     observacao: string
     endereco: Endereco;
     cpf_cliente: string;
     status: string;
     
}
