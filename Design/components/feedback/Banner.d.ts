import * as React from 'react';
export interface BannerProps {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  icon?: string;
  children?: React.ReactNode;
}
export declare function Banner(props: BannerProps): JSX.Element;
