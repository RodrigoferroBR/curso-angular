import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Produto } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  newProduto: Produto = {
    name: '',
    price: null,
  }
  
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  criarProduto(): void {
    this.productService.criar(this.newProduto).subscribe(res => {
      this.productService.showMessage(`Produto ${res.id} criado com sucesso !!!`)
      this.router.navigate(['/products'])
    })
  }

  cancelarProduto(): void {
    this.router.navigate(['/products'])
  }

}
