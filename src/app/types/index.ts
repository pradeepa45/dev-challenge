export interface Task {
  id: string;
  title: string;
  completed: boolean;
  date: string;
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
