export interface CompanyLogoProps {
  /** Nombre de la empresa: genera las iniciales si no hay logo */
  name: string;
  src?: string;
  size?: 'sm' | 'md';
}
export declare function CompanyLogo(props: CompanyLogoProps): JSX.Element;
