import { FormGroup } from '@angular/forms';

export class FormService {
  getFormControlError(form: FormGroup, formControlName: string) {
    // Check touched state
    if (formControlName in form.controls) {
      if (form.controls[formControlName].touched) {
        const errors = form.controls[formControlName].errors;

        if (errors) {
          const errorsValues = Object.values(errors);
          if (errorsValues.length > 0) {
            return errorsValues[0] ? 'Error' : null;
          }
        }
      }
    }

    return null;
  }
}
