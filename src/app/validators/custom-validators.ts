import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function startsWithUppercase(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value as string;

  if (!/^[A-Z]/.test(value)) {
    return { startsWithUppercase: true };
  }

  return null;
}
export function containsOnlyLettersNumbersAndSpaces(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value as string;

  if (!/^[a-zA-Z1-9\s]+$/.test(value)) {
    return { startsWithUppercase: true };
  }

  return null;
}
export function dateFromPast(control: AbstractControl): ValidationErrors | null {
  const inputDate = new Date(control.value);
  const currentDate = new Date();

  if (inputDate < currentDate) {
    return { dateFromPast: true };
  }

  return null;
}
export function arraySizeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value || !(control.value instanceof Array)) {
      return { invalidArray: true };
    }

    const arrayLength = (control.value as any[]).length;

    if (arrayLength < min || arrayLength > max) {
      return { invalidArraySize: true };
    }

    return null;
  };
}
