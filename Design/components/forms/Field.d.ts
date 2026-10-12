import * as React from 'react';
/**
 * Campo de texto con etiqueta visible, ayuda y error.
 * @startingPoint section="Forms" subtitle="Campos y control segmentado" viewport="700x360"
 */
export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Siempre visible encima del campo */
  label?: string;
  help?: string;
  /** Mensaje en positivo: qué hacer para corregirlo */
  error?: string;
  /** Icono Phosphor a la izquierda */
  icon?: string;
  multiline?: boolean;
}
export declare function Field(props: FieldProps): JSX.Element;
