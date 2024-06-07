import { Routes } from '@angular/router';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { productResolver } from './resolver/product.resolver';
import { ShoppingcartPageComponent } from './shoppingcart-page/shoppingcart-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductPageComponent },
  { path: 'product/:id', component: ProductDetailPageComponent, resolve: { product: productResolver } },
  { path: 'login', component: ShoppingcartPageComponent },
];
