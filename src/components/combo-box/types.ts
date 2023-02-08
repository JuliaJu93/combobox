export default interface ComboBoxI {
  value: string;
  onChange: () => string;
  options: string[];
  defaultValue?: string;
}
