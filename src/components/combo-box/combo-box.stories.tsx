import React, { useState } from 'react';
import { ComboBox } from './combo-box';

export default {
  title: 'ComboBox'
};

const shortList = [
  { label: 'tomato', value: 'tomato' },
  { label: 'apple', value: 'apple' },
  { label: 'onion', value: 'onion' }
];

const longList = [
  { label: 'tomato', value: 'tomato' },
  { label: 'apple', value: 'apple' },
  { label: 'onion', value: 'onion' },
  { label: 'oil', value: 'oil' },
  { label: 'pasta', value: 'pasta' },
  { label: 'bread', value: 'bread' },
  { label: 'salad', value: 'salad' },
  { label: 'orange', value: 'orange' },
  { label: 'soda', value: 'soda' },
  { label: 'sausage', value: 'sausage' },
  { label: 'three really red cats', value: 'cats' },
  { label: 'potato', value: 'potato' },
  { label: 'slice of pizza', value: 'potato' },
  { label: 'orange', value: 'secondOrange' }
];

export function Default() {
  const [value, setValue] = useState<null | { label: string; value: string }>(
    null
  );

  const [value1, setValue1] = useState<null | { label: string; value: string }>(
    null
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        maxWidth: '650px',
        flexWrap: 'wrap',
        marginTop: '530px'
      }}
    >
      <div>
        <div style={{ marginBottom: '10px' }}>
          {' '}
          Короткий список без дефолтного значения:{' '}
        </div>
        <ComboBox value={value} onChange={setValue} options={shortList} />
      </div>
      <div>
        <div style={{ marginBottom: '10px' }}>
          {' '}
          Длинный список с дефолтным значением:{' '}
        </div>
        <ComboBox
          value={value1}
          onChange={setValue1}
          options={longList}
          defaultValue={shortList[1]}
        />
      </div>
    </div>
  );
}
