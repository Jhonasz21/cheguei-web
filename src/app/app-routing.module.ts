import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductCrudComponent } from './view/product-crud/product-crud.component';
import { QuemSomosComponent } from 'src/app/information/somos/somos.component'
import { TelaAgendamentoComponent } from './scheduling/tela.agendamento.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente/cadastro-cliente.component';
import { AppComponent } from './app.component';
import { AgendamentoAndamentoComponent } from './scheduling/agendamento-andamento/agendamento-andamento/agendamento-andamento.component';
import { AgendamentoConcluidoComponent } from './scheduling/agendamento-concluido/agendamento-concluido/agendamento-concluido.component';


const routes: Routes = [
  { path: "", component: ProductCrudComponent },
  { path: "login", component: HomeComponent },
  { path: "products", component: ProductCrudComponent },
  { path: "products/create", component: ProductCreateComponent},
  { path: "quemSomos", component: QuemSomosComponent},
  { path: "telaAgendamento", component: TelaAgendamentoComponent},
  { path: "cadastroCliente", component: CadastroClienteComponent},
  { path: "agendamentos-andamento/:cpf", component: AgendamentoAndamentoComponent},
  { path: "agendamentos-concluido/:cpf", component: AgendamentoConcluidoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
