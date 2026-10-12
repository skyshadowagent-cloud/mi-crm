import * as React from 'react';
/**
 * Acción. La principal es un contorno de acento, nunca relleno.
 * @startingPoint section="Core" subtitle="Botones en todas sus variantes" viewport="700x320"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary: una por pantalla. danger: acciones destructivas. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** sm 36px (solo web con ratón) · md 44px · lg 48px (por defecto en móvil) */
  size?: 'sm' | 'md' | 'lg';
  /** Nombre de icono Phosphor sin prefijo, p. ej. "phone" */
  icon?: string;
  iconRight?: string;
  loading?: boolean;
  block?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
