import { ErrorKey } from '@core/models/error-message.model';

export const mapFormErrorsToMessage = (errorKey: ErrorKey, value: any) => {
  const message = getMessage(errorKey, value);
  return (
    {
      required: 'Field required',
      pattern: message,
      email: 'Invalid email',
      minlength: message,
    }[errorKey] ?? 'This field is invalid'
  );
};

const getMessage = (errorKey: ErrorKey, value: any) => {
  switch (errorKey) {
    case 'pattern':
      const customMessage = value.custom;
      return customMessage ?? 'This field does not match the required format';

    case 'minlength':
      return `This field must have at least ${value.requiredLength} characters`;

    default:
      return 'This field is invalid';
  }
};
