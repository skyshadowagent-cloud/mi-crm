export interface SidebarItem { id: string; label: string; icon: string; badge?: number }
export interface SidebarProps {
  items: SidebarItem[];
  active?: string;
  onChange?: (id: string) => void;
  /** Wordmark tipográfico; no hay logo gráfico */
  brand?: string;
}
export declare function Sidebar(props: SidebarProps): JSX.Element;
