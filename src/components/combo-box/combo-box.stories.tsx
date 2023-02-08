import React, { useState } from 'react';
import { ComboBox } from './combo-box';

export default {
  title: 'ComboBox'
};

const shortList = [
  'баклажаны',
  'солёненькие огурчики',
  'селёдочка под томатным соусиком'
];
const longList = [
  'макароны',
  'тефтели',
  'салат',
  'бородинский хлеб',
  'квас',
  'соус',
  'три рыжих кота',
  'капуста',
  'четверть луковицы'
];

export function Default() {
  const [value, setValue] = useState('');

  return <ComboBox value={value} onChange={setValue} options={shortList} />;
}
