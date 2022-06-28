import { Endereco } from "./endereco.model";
import { Login } from "./login.model";

export class Cliente {

     nome: string;
     cpf: string;
     nascimento: Date;
     telefone: string;
     endereco: Endereco;
     login: Login;
     perfil: string
     
}
