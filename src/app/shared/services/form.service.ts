import { FormGroup } from '@angular/forms';
import { ErrorKey } from '@core/models/error-message.model';
import { mapFormErrorsToMessage } from '@shared/utils/form-errors';

export class FormService {
  getFormControlError(form: FormGroup, formControlName: string) {
    // Check touched state
    if (formControlName in form.controls) {
      if (form.controls[formControlName].touched) {
        const errors = form.controls[formControlName].errors;

        if (errors) {
          const entries = Object.entries(errors);

          if (entries.length > 0) {
            const [key] = entries[0];
            return mapFormErrorsToMessage(key as ErrorKey);
          }
        }
      }
    }

    return null;
  }
}
