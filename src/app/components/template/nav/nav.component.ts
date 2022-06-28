import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sair(){
    console.log('sair do sair ')
    localStorage.removeItem('taLogado');
    localStorage.removeItem('cpf');
    window.location.href="login"
 }

 goToAndamento(){
   let cpf = localStorage.getItem("cpf") as string
    this.router.navigate(['/agendamentos-andamento/'+cpf])
}

goToConcluido(){
  let cpf = localStorage.getItem("cpf") as string
   this.router.navigate(['/agendamentos-concluido/'+cpf])
}

}
