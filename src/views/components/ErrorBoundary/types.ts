import { ReactNode } from 'react';

export type IProps = {
  children: ReactNode;
};

export type IState = {
  hasError: boolean;
};

export type IGetDerivedStateFromError = Partial<IState> | null;
