import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; /* Importção  do SnakeBar */
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ /* Essa Classe Pode ser injetada em outras classes */
	providedIn: 'root'
})
export class ProductService {

	baseUrl = "http://localhost:3001/products"


	constructor(private snackBar: MatSnackBar, /* Constutor do snakeBar: Tipo MatSnackBar */
		private http: HttpClient) { }      /* Constutor do cliente HTTP Client */

	/* Metodo (string: tipo) */
	showMessage(msg: string): void {
		this.snackBar.open(msg, 'x', { /* (metodo)snackBar.abre(msg) na pagina.ts -> this.productService.showMessage('Produto Criado')*/
			duration: 3000,
			horizontalPosition: "right",
			verticalPosition: "top"
		})
	}

	/* Interação com backend */
	create(product: Product): Observable<Product> {
		return this.http.post<Product>(this.baseUrl, product) /* post inserir produto no backend */
	}

	read(): Observable<Product[]> {
		return this.http.get<Product[]>(this.baseUrl)

	}

}