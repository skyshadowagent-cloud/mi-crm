import * as React from 'react';
export interface DialogProps {
  open?: boolean;
  /** Pregunta concreta: "¿Eliminar a Lucía Ortega?" */
  title: string;
  children?: React.ReactNode;
  /** Botones: secundario (Cancelar) primero, acción después */
  actions?: React.ReactNode;
  onClose?: () => void;
  /** Renderiza sin backdrop (documentación) */
  inline?: boolean;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
