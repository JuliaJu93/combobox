import React, { useState } from 'react';
import { ComboBox } from './combo-box';

export default {
  title: 'ComboBox'
};

const shortList = ['tomato', 'apple', 'onion'];
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
  const [value, setValue] = useState('');

  return <ComboBox value={value} onChange={setValue} options={shortList} />;
}
