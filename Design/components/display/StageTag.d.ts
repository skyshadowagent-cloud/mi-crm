export interface StageTagProps {
  stage: 'nuevo' | 'contactado' | 'propuesta' | 'negociacion' | 'ganado' | 'perdido';
  size?: 'sm' | 'md';
  showIcon?: boolean;
}
export declare function StageTag(props: StageTagProps): JSX.Element;
