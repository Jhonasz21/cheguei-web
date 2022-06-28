import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  taLogado: Boolean;
  showPages: Boolean = false;

  constructor(private router: Router) {
    console.log(router.url);
  }

  ngOnInit(): void {
    if (localStorage.getItem("taLogado") === "true") {
      this.taLogado = true;
    } else {
      this.taLogado = false;
    }


    this.router.events.subscribe((res) => { 
       if ( (this.router.url === "/login" || this.router.url === "/cadastroCliente") && this.taLogado == false
    ) {
      this.showPages = true;
    }
  })
  }
}
