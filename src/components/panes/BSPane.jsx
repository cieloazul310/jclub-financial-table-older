import React from 'react';
import CommonTable, { TdHead } from '../CommonTable';
import PaneTemplate from './PaneTemplate';
import Article from './Article';
import { format as d3format } from 'd3-format';

import md from './BS.md';

const emphasized = true;

const BSProps = [
  { label: '総資産', emphasized },
  { label: '流動資産' },
  { label: '固定資産等' },
  { label: '総負債', emphasized },
  { label: '流動負債' },
  { label: '固定負債' },
  { label: '純資産', emphasized },
  { label: '資本金' },
  { label: '資本剰余金等' },
  { label: '利益剰余金' },
  { label: '当期純利益' }
];

const BSTable = ({ data }) => (
  <CommonTable>
    <thead>
      <tr>
        <TdHead type="thead" />
        {BSProps.map((obj, i) => <td key={i}>{obj.label}</td>)}
        <td>流動比率</td>
        <td>自己資本比率</td>
      </tr>
    </thead>
    <tbody>
      {data.map((d, i) => (
        <tr key={i}>
          <TdHead d={d} />
          {BSProps.map(obj => (
            <td key={obj.label} className={obj.emphasized ? 'em' : ''}>
              {d[obj.label]}
            </td>
          ))}
          <td>
            {d['流動資産'] && d['流動負債']
              ? d3format('.0%')(d['流動資産'] / d['流動負債'])
              : ''}
          </td>
          <td>{d3format('.0%')(d['純資産'] / d['総資産'])}</td>
        </tr>
      ))}
    </tbody>
  </CommonTable>
);

const BSPane = ({ eventKey, data }) => (
  <PaneTemplate eventKey={eventKey}>
    <h3>貸借対照表</h3>
    <div style={{textAlign: 'right'}}>
      <small>単位: 百万円</small>
    </div>
    <BSTable data={data} />
    <Article md={md} />
  </PaneTemplate>
);

export default BSPane;