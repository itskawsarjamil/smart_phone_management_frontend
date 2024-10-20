import { ReactNode } from "react";

export type TPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TPath[];
};

export type TItem = {
  key: string;
  label: ReactNode | string;
  children?: (TItem | undefined)[];
};

export type TRoute = {
  path: string;
  element: ReactNode;
};
