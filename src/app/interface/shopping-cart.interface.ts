import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { IOrderForm } from './order-form.interface';

export interface IShoppingCartForm {
  name: FormControl<string | null>;
  address: FormControl<string | null>;
  phone: FormControl<string | null>;
  details: FormArray<FormGroup<IOrderForm>>;
}
