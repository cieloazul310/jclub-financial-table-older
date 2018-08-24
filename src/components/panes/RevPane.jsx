import React, { Fragment } from 'react';
import CommonTable, { TdHead } from '../CommonTable';
import PaneTemplate from './PaneTemplate';
import Article from './Article';

import md from './revenue.md';

const RevTable = ({ data }) => (
  <CommonTable>
    <thead>
      <tr>
        <TdHead type="thead" />
        <td>営業収入</td>
        <td>広告料収入</td>
        <td>入場料収入</td>
        <td>Jリーグ配分金</td>
        <td>アカデミー関連収入</td>
        <td>物販収入</td>
        <td>その他収入</td>
      </tr>
    </thead>
    <tbody>
      {data.map((d, i) => (
        <tr key={i}>
          <TdHead d={d} />
          {calcRevenueTds(d)}
        </tr>
      ))}
    </tbody>
  </CommonTable>
);

const RevPane = ({ eventKey, data }) => (
  <PaneTemplate eventKey={eventKey}>
    <h3>営業収入</h3>
    <div style={{textAlign: 'right'}}>
      <small>単位: 百万円</small>
    </div>
    <RevTable data={data} />
    <Article md={md} />
  </PaneTemplate>
);


function calcRevenueTds(d) {
  const BasicRevs = () => (
    <Fragment>
      <td>{d['広告料収入']}</td>
      <td>{d['入場料収入']}</td>
      <td>{d['Jリーグ配分金']}</td>
    </Fragment>
  );

  return d['年'] < 2011 ? (
    <Fragment>
      <td className="em">{d['営業収入']}</td>
      <BasicRevs />
      <td colSpan={3}>{d['その他収入']}</td>
    </Fragment>
  ) : d['年'] < 2016 ? (
    <Fragment>
      <td className="em">{d['営業収入']}</td>
      <BasicRevs />
      <td>{d['アカデミー関連収入']}</td>
      <td colSpan={2}>{d['その他収入']}</td>
    </Fragment>
  ) : (
    <Fragment>
      <td className="em">{d['営業収入']}</td>
      <BasicRevs />
      <td>{d['アカデミー関連収入']}</td>
      <td>{d['物販収入']}</td>
      <td>{d['その他収入']}</td>
    </Fragment>
  );
}

export default RevPane;