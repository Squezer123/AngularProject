import { AbstractControl, ValidationErrors } from '@angular/forms';

export function startsWithUppercase(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value as string;

  if (!/^[A-Z]/.test(value)) {
    return { startsWithUppercase: true };
  }

  return null;
}