import React, { useState } from 'react';
import { ComboBox } from './combo-box';

export default {
  title: 'ComboBox'
};

const shortList = [
  { label: 'tomato', value: 'tomato' },
  { label: 'apple', value: 'apple' },
  { label: 'onion', value: 'onion' },
  { label: 'oil', value: 'oil' }
];

const longList = [
  'pasta',
  'bread',
  'salad',
  'orange',
  'soda',
  'sausage',
  'three really red cats',
  'potato',
  'slice of pizza'
];

export function Default() {
  const [value, setValue] = useState<null | { label: string; value: string }>(
    null
  );

  return (
    <ComboBox
      value={value}
      onChange={setValue}
      options={shortList}
      defaultValue={shortList[1]}
    />
  );
}
