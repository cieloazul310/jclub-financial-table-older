import React from 'react';
import CommonTable, { TdHead } from '../CommonTable';
import PaneTemplate from './PaneTemplate';
import Article from './Article';

import md from './PL.md';

const emphasized = true;

const PLProps = [
  { label: '営業収入' },
  { label: '営業費用' },
  { label: '営業利益', emphasized },
  { label: '営業外収益' },
  { label: '営業外費用' },
  { label: '経常利益', emphasized },
  { label: '特別利益' },
  { label: '特別損失' },
  { label: '税引前当期利益', emphasized },
  { label: '法人税および住民税等' },
  { label: '当期純利益', emphasized }
];

const PLTable = ({ data }) => (
  <CommonTable>
    <thead>
      <tr>
        <TdHead type="thead" />
        {PLProps.map((obj, i) => <td key={i}>{obj.label}</td>)}
      </tr>
    </thead>
    <tbody>
      {data.map((d, i) => (
        <tr key={i}>
          <TdHead d={d} />
          {PLProps.map(obj => (
            <td key={obj.label} className={obj.emphasized ? 'em' : ''}>
              {d[obj.label]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </CommonTable>
);

const PLPane = ({ eventKey, data }) => (
  <PaneTemplate eventKey={eventKey}>
    <h3>損益計算書</h3>
    <div style={{textAlign: 'right'}}>
      <small>単位: 百万円</small>
    </div>
    <PLTable data={data} />
    <Article md={md} />
  </PaneTemplate>
);

export default PLPane;
