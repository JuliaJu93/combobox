export default interface ComboBoxI {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  defaultValue: string;
}
