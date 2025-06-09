import { ErrorKey } from '@core/models/error-message.model';

export const mapFormErrorsToMessage = (errorKey: ErrorKey) => {
  return (
    {
      required: 'This field is required',
      pattern: 'Invalid URL',
    }[errorKey] ?? 'This field is invalid'
  );
};
