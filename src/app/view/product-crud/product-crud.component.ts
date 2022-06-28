import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; /* Importando o Router para página */

@Component({
  selector: 'app-product-crud', /*2. Angular vai criar esse componente no momento que eu referenciar a tag app-product-crud */
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  /* 1- dentro do cosntrutor desse component vai precisar de um Router */
  constructor(private router: Router) { } /* construtor  de rota */

  ngOnInit(): void {
  }
  
  navigateToProductCreate(): void { /* metodo */
    this.router.navigate(['/products/create']) /* 3. Essa Rota navega partitionArray([]) */
  }

}
