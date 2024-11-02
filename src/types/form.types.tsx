import { ReactNode } from "react";
import {
  DefaultValues,
  FieldValues,
  Resolver,
  SubmitHandler,
} from "react-hook-form";

// export type TSMFormWithGeneric<T extends FieldValues> = {
//   onSubmit: SubmitHandler<T>;
//   children: ReactNode;
// };

// export type TFormConfigWithGeneric<T extends FieldValues> = {
//   defaultValues?: DefaultValues<T>;
//   resolver?: Resolver<T, any>;
// };

// export type TFormPropsWithGeneric<T extends FieldValues> =
//   TSMFormWithGeneric<T> & TFormConfigWithGeneric<T>;

export type TSMForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
};

export type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

export type TFormProps = TSMForm & TFormConfig;

export type TSMInput = {
  name: string;
  label: string;
  type?: string;
  disabled?: boolean;
  defaultValue?: string;
  required?: boolean;
};

export type TSelect = {
  name: string;
  label: string;
  options: { label: string; value: string }[]; // Array of options for the select
  required?: boolean;
  disabled?: boolean;
  mode?: "multiple" | "tags" | undefined;
};
