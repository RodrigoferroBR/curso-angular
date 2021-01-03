import { Component, OnInit } from '@angular/core';
import { Produto } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private ProductService: ProductService, 
    private router: Router,
    private route: ActivatedRoute) { }

  product: Produto;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProductService.readById(id).subscribe(product => {
      this.product = product;
    })
  }

  deleteProduto(): void {
    this.ProductService.delete(this.product.id).subscribe(() => {
      this.ProductService.showMessage(`Produto '${this.product.name}', foi deletado com sucesso`)
      this.router.navigate(['/products'])
    })
  }

  cancelDelete(): void {
    this.router.navigate(['/products'])
  }

}
