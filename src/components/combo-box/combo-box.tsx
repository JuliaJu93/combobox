import { useState } from 'react';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Input from './components/Input/Input';
import ComboBoxI from './types';

export function ComboBox({
  value,
  onChange,
  options,
  defaultValue
}: ComboBoxI) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <Input value={value} onChange={onChange} setIsFocus={setIsFocus} />
      {isFocus && <DropdownMenu options={options} value={value} />}
    </>
  );
}
