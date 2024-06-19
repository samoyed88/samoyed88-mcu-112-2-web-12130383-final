import { Product } from './product';
export class Order {
  constructor(initData?: Partial<Order>) {
    Object.assign(this, initData);
  }
  name!: string;
  address!: string;
  phone!: string;
  details!: OrderDetail[];
}
export class OrderDetail {
  constructor(initData?: Partial<OrderDetail>) {
    Object.assign(this, initData);
  }
  id!: number;
  product!: Product;
  count!: number;
  price!: number;
}
