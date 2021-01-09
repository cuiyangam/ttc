import React from 'react';
import { VariableSizeList as List } from './src';

import './index.css';

// These row heights are arbitrary.
// Yours should be based on the content of the row.
const itemCount = 2000;
const rowSizes = new Array(itemCount)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const getItemSize = index => rowSizes[index];

const Row = ({ index, style }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    Row {index}
  </div>
);

const Example = () => (
  <List
    className="List"
    height={300}
    itemCount={itemCount}
    itemSize={getItemSize}
    width={300}
  >
    {Row}
  </List>
);

export default Example;