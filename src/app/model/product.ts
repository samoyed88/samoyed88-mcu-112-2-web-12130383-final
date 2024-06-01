export class Product {
  constructor(initData?: Partial<Product>) {
    Object.assign(this, initData);
  }
  id!: number;

  name!: string;

  authors!: string;

  company!: string;

  isSALE!: boolean;

  imgUrl!: string;

  price!: number;
}
