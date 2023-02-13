export interface IComboBox {
  value: string;
  onChange: (val: string) => void;
  options: IOptions[];
  defaultValue?: string;
}

export interface IOptions {
  value: string;
  label: string;
}
