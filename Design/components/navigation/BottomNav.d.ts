/**
 * Barra inferior móvil con 3–5 destinos, icono + etiqueta.
 * @startingPoint section="Navigation" subtitle="Barra inferior y sidebar" viewport="700x360"
 */
export interface NavItem { id: string; label: string; icon: string; badge?: number }
export interface BottomNavProps {
  items?: NavItem[];
  active?: string;
  onChange?: (id: string) => void;
}
export declare function BottomNav(props: BottomNavProps): JSX.Element;
