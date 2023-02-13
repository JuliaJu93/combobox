import React, { useState } from 'react';
import { ComboBox } from './combo-box';

export default {
  title: 'ComboBox',
  component: ComboBox
};

const longList = [
  { label: 'tomato', value: 'tomato' },
  { label: 'apple', value: 'apple' },
  { label: 'onion', value: 'onion' },
  { label: 'oil', value: 'oil' },
  { label: 'soda', value: 'soda' },
  { label: 'sausage', value: 'sausage' },
  { label: 'three really red cats', value: 'cats' },
  { label: 'potato', value: 'potato' },
  { label: 'slice of pizza', value: 'pizza' },
  { label: 'orange', value: 'secondOrange' }
];

interface IArgs {
  value: string;
  onChange: (val: null | string) => void;
  options: { label: string; value: string }[];
  defaultValue: string;
}

export function Default(args: IArgs) {
  const [value, setValue] = useState<string>('');

  const { options, defaultValue } = args;

  return (
    <ComboBox
      value={value}
      onChange={setValue}
      options={options}
      defaultValue={defaultValue}
    />
  );
}

Default.args = {
  value: '',
  onChange: () => {},
  options: longList,
  defaultValue: longList[1].label
};
