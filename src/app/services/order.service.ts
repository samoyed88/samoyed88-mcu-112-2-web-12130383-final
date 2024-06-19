import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly url = 'http://localhost:3000/orders';

  private readonly httpClient = inject(HttpClient);

  sendOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.url, order);
  }
}
