import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, startWith, switchMap } from 'rxjs';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [AsyncPipe, ProductCardListComponent, JsonPipe, ReactiveFormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  router = inject(Router);

  private productService = inject(ProductService);

  private readonly refresh$ = new Subject<void>();

  protected readonly formControl = new FormControl<string | undefined>(undefined);

  onView(product: Product): void {
    this.router.navigate(['product', product.id]);
  }

  readonly products$ = this.refresh$.pipe(
    startWith(undefined),
    switchMap(() => this.productService.getList(undefined, 1, 5))
  );
}
