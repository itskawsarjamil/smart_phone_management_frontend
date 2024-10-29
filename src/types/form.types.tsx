import { ReactNode } from "react";
import {
  DefaultValues,
  FieldValues,
  Resolver,
  SubmitHandler,
} from "react-hook-form";

export type TSMForm<T extends FieldValues> = {
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
};

export type TFormConfig<T extends FieldValues> = {
  defaultValues?: DefaultValues<T>;
  resolver?: Resolver<T, any>;
};

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
};
