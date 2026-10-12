export interface SegmentedOption { value: string; label: string; icon?: string }
export interface SegmentedControlProps {
  options: Array<string | SegmentedOption>;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  label?: string;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
