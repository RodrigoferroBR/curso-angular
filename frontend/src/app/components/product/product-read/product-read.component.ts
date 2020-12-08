import { Component, OnInit } from '@angular/core';
import { Produto } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  
  produtos: Produto[]
  displayedColumns = ['id', 'name', 'preco', 'action'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe(produtos => {
      this.produtos = produtos
    })
  }

}
