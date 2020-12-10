import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs/internal/Observable';
import { Produto } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://192.168.12.50:3001/produtos';

  constructor(private snackBar: MatSnackBar, 
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  }

  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, produto)
  }

  read():  Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl)
  }

  readById(id: string): Observable<Produto> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Produto>(url)
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/${produto.id}`
    return this.http.put<Produto>(url, produto)
  }

}
