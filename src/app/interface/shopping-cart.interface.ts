import { FormControl } from '@angular/forms';

export interface IProductForm {
  name: FormControl<string | null>;
  address: FormControl<string | null>;
  phone: FormControl<string | null>;
}
