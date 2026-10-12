export interface DealCardProps {
  title: string;
  company: string;
  /** Importe formateado: "3.200 €" */
  amount: string;
  /** "Vence hoy", "3 oct." */
  due?: string;
  dueTone?: 'warning' | 'danger';
  /** Nombre del responsable (se muestran iniciales) */
  owner?: string;
  dragging?: boolean;
  onClick?: () => void;
}
export declare function DealCard(props: DealCardProps): JSX.Element;
