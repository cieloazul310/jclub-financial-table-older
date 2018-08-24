import React from 'react';
import CommonTable, { TdHead } from '../CommonTable';
import PaneTemplate from './PaneTemplate';

const AttdTable = ({ data }) => (
  <CommonTable>
    <thead>
      <tr>
        <TdHead type="thead" />
        <td>入場料収入</td>
        <td>リーグ戦平均入場者数</td>
        <td>総入場者数</td>
        <td>ホーム試合数</td>
        <td>客単価</td>
      </tr>
    </thead>
    <tbody>
      {data.map((d, i) => (
        <tr key={i}>
          <TdHead d={d} />
          <td>{d['入場料収入']}</td>
          <td>{Math.round(d['リーグ戦平均入場者数'])}</td>
          <td>{d['総入場者数']}</td>
          <td>{d['ホーム総試合数'] || d['ホーム総入場者数']}</td>
          <td>{Math.round(d['客単価'])}</td>
        </tr>
      ))}
    </tbody>
  </CommonTable>
);

const AttdPane = ({ eventKey, data }) => (
  <PaneTemplate eventKey={eventKey}>
    <h3>入場者数</h3>
    <div style={{textAlign: 'right'}}>
      <small>単位: 入場料収入のみ百万円</small>
    </div>
    <AttdTable data={data} />
  </PaneTemplate>
);

export default AttdPane;