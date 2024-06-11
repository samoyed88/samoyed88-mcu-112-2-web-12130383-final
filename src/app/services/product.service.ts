import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data = [
    new Product({
      id: 1,
      name: '產品A',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      isSALE: true,
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
  ];

  getList(name: string | undefined, pageIndex: number, pageSize: number): Observable<Product[]> {
    return of(this._data);
  }

  getById(productId: number): Observable<Product> {
    const product = this._data.find(({ id }) => id === productId)!;
    return of(product);
  }

  getCount(name?: string): Observable<number> {
    throw new Error('NO');
  }

  update(product: Product): Observable<Product> {
    const index = this._data.findIndex(({ id }) => product.id === id);
    const newProduct = new Product({ ...product });
    this._data[index] = newProduct;
    return of(newProduct);
  }
}
