import * as React from 'react';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icono Phosphor sin prefijo */
  icon: string;
  /** Obligatorio: se lee en voz alta y aparece como tooltip */
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'md' | 'lg';
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
