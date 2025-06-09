import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export class CustomValidators {
  static pattern(pattern: string | RegExp, errorMessage?: string) {
    return (controls: AbstractControl): ValidationErrors | null => {
      const validationFn = Validators.pattern(pattern);

      const errors = validationFn(controls);

      if (!errors) return null;

      return {
        pattern: {
          ...errors['pattern'],
          custom: errorMessage,
        },
      };
    };
  }
}
