import { Dispatch, SetStateAction } from 'react';

export interface ComboBoxI {
  value: OptionsI | null;
  onChange: Dispatch<SetStateAction<OptionsI | null>>;
  options: OptionsI[];
  defaultValue: OptionsI | null;
}

export interface OptionsI {
  value: string;
  label: string;
}
