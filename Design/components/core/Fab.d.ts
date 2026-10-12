import * as React from 'react';
export interface FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  /** Siempre visible junto al icono. Por defecto "Nuevo". */
  label?: string;
}
export declare function Fab(props: FabProps): JSX.Element;
