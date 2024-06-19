import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { filter, map } from 'rxjs';
import { IOrderForm } from '../interface/order-form.interface';
import { IShoppingCartForm } from '../interface/shopping-cart.interface';
import { Product } from '../model/product';
import { ShoppingCartSendService } from '../services/shopping-cart-send.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-page',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CurrencyPipe],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.css',
})
export class ShoppingCartPageComponent implements OnInit {
  [x: string]: any;
  readonly ShoppingCartService = inject(ShoppingCartService);

  private readonly destroyRef = inject(DestroyRef);

  readonly ShoppingCartSendService = inject(ShoppingCartSendService);

  totalPrice = 0;

  form = new FormGroup<IShoppingCartForm>({
    name: new FormControl<string | null>(null, { validators: [Validators.required] }),
    address: new FormControl<string | null>(null, { validators: [Validators.required] }),
    phone: new FormControl<string | null>(null, { validators: [Validators.required, Validators.pattern('\\d{8,10}')] }),
    details: new FormArray<FormGroup<IOrderForm>>([]),
  });

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get address(): FormControl<string | null> {
    return this.form.get('address') as FormControl<string | null>;
  }

  get phone(): FormControl<string | null> {
    return this.form.get('phone') as FormControl<string | null>;
  }

  get details(): FormArray<FormGroup<IOrderForm>> {
    return this.form.get('details') as FormArray<FormGroup<IOrderForm>>;
  }

  ngOnInit(): void {
    this.details.valueChanges
      .pipe(
        map((items) => {
          if (items.length === 0) {
            return 0;
          } else {
            return items.reduce((sum, curr) => sum + (curr.price || 0), 0);
          }
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((totalPrice) => (this.totalPrice = totalPrice));

    this.setOrderDetail();
  }

  setOrderDetail() {
    for (const item of this.ShoppingCartService.data) {
      const control = new FormGroup<IOrderForm>({
        id: new FormControl<number>(item.id, { nonNullable: true }),
        product: new FormControl<Product>(item.product, { nonNullable: true }),
        count: new FormControl<number>(item.count, { nonNullable: true }),
        price: new FormControl<number>(item.product.price * item.count, { nonNullable: true }),
      });

      control
        .get('count')
        ?.valueChanges.pipe(
          filter((value) => value !== null),
          map((value) => value * item.product.price),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe((price) => control.get('price')?.setValue(price, { EventEmitter: false }));

      this.details.push(control);
    }
  }

  onSend(): void {
    if (this.form.valid) {
      const order = this.form.value;
      this.ShoppingCartSendService.sendOrder(order).subscribe({
        next: (response) => {
          console.log('Order saved successfully', response);
        },
        error: (error) => {
          console.error('Error saving order', error);
        },
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
