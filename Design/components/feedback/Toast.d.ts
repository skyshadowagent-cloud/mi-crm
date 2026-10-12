/**
 * Feedback breve.
 * @startingPoint section="Feedback" subtitle="Toast, banner, diálogo y skeleton" viewport="700x420"
 */
export interface ToastProps {
  message: string;
  tone?: 'success' | 'info' | 'warning' | 'danger';
  /** Normalmente "Deshacer" */
  actionLabel?: string;
  onAction?: () => void;
}
export declare function Toast(props: ToastProps): JSX.Element;
