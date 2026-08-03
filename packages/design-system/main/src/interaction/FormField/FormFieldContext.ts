import { createContext, useContext } from 'react';

export type FormFieldContextValue = {
  inputId: string;
  describedBy?: string;
  invalid: boolean;
  required: boolean;
};

export const FormFieldContext = createContext<FormFieldContextValue | null>(null);

export function useFormFieldContext(): FormFieldContextValue | null {
  return useContext(FormFieldContext);
}
