/**
 * Fila de lista de contactos/deals, 72px, con acciones al deslizar.
 * @startingPoint section="CRM" subtitle="Fila de contacto y tarjeta de deal" viewport="700x340"
 */
export interface ContactRowProps {
  name: string;
  company?: string;
  /** Texto tras la empresa: "hace 2 h", "vence hoy" */
  meta?: string;
  metaTone?: 'warning' | 'danger' | 'success' | 'info';
  /** Importe ya formateado en es-ES: "2.400 €" */
  amount?: string;
  stage?: 'nuevo' | 'contactado' | 'propuesta' | 'negociacion' | 'ganado' | 'perdido';
  logo?: string;
  /** Muestra las acciones reveladas (estado deslizado) */
  open?: boolean;
  onCall?: () => void;
  onWhatsApp?: () => void;
  onClick?: () => void;
}
export declare function ContactRow(props: ContactRowProps): JSX.Element;
