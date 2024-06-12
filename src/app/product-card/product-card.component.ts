import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, Output, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productName!: string;
  @Input() authors!: string[];
  @Input() company!: string;
  @Input() isShow!: boolean;
  @Input() isSale!: boolean;
  @Input() imgUrl!: string;
  @Input({ transform: numberAttribute }) price!: number;

  @HostBinding('class')
  class = 'product-card';

  @Output()
  view = new EventEmitter<void>();
}
