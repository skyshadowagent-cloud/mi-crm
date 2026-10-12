import * as React from 'react';
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  count?: number;
  children?: React.ReactNode;
}
export declare function Chip(props: ChipProps): JSX.Element;
