import { Observable, OperatorFunction, finalize, defer } from 'rxjs';
import { WritableSignal } from '@angular/core';

export const handleLoadingIndicator = <T>(
  loadingSignal: WritableSignal<boolean>
): OperatorFunction<T, T> => {
  return (source: Observable<T>) =>
    defer(() => {
      loadingSignal.set(true);
      return source.pipe(
        finalize(() => {
          loadingSignal.set(false);
        })
      );
    });
};
