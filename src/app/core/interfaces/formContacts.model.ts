import { FormControl } from '@angular/forms';

export interface FormModel {
  name: FormControl<string | null>;
  phone: FormControl<string | null>;
  email: FormControl<string | null>;
  interested: FormControl<string | null>;
  message: FormControl<string | null>;
}
