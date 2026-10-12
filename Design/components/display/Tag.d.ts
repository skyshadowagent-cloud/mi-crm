import * as React from 'react';
/**
 * Etiqueta tintada desde las rampas.
 * @startingPoint section="Display" subtitle="Tags, etapas, logos y tarjetas" viewport="700x300"
 */
export interface TagProps {
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info';
  icon?: string;
  size?: 'sm' | 'md';
  children?: React.ReactNode;
  className?: string;
}
export declare function Tag(props: TagProps): JSX.Element;
