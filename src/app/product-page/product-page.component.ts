import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  products = [
    new Product({
      id: 1,
      name: 'A產品',
      authors: '作者甲、作者乙、作者丙',
      company: '博碩文化',
      isSALE: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      id: 2,
      name: 'B產品',
      authors: '作者甲、作者乙、作者丙',
      company: '博碩文化',
      isSALE: false,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      id: 3,
      name: 'C產品',
      authors: '作者甲、作者乙、作者丙',
      company: '博碩文化',
      isSALE: false,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      id: 4,
      name: 'D產品',
      authors: '作者甲、作者乙、作者丙',
      company: '博碩文化',
      isSALE: false,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
  ];
}
