import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  productName = 'A產品';
  authors = '作者甲、作者乙、作者丙';
  company = '博碩文化';
  imgUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';
}
