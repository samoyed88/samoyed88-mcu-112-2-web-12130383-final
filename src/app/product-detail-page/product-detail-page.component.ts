import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  readonly shoppingCartService = inject(ShoppingCartService);

  @Input()
  product!: Product;

  private router = inject(Router);

  private productService = inject(ProductService);

  onEdit(): void {
    this.router.navigate(['product', 'form', this.product.id]);
  }

  onBack(): void {
    this.router.navigate(['products']);
  }

  onAdd(): void {
    this.shoppingCartService.addProduct(this.product);
  }
}
