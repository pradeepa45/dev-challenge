export interface Option {
  name: string;
  selected: boolean;
  slug: string;
  disabled: boolean;
}

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export interface CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}
