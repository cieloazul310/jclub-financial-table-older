import React, { Fragment } from 'react';
import CommonTable, { TdHead } from '../CommonTable';
import PaneTemplate from './PaneTemplate';


const ExpTable = ({ data }) => (
  <CommonTable>
    <thead>
      <tr>
        <TdHead type="thead" />
        <td>営業費用</td>
        <td>チーム人件費</td>
        <td>試合関連経費</td>
        <td>トップチーム運営経費</td>
        <td>アカデミー運営経費</td>
        <td>女子チーム運営経費</td>
        <td>物販関連費</td>
        <td>販売費</td>
        <td>一般管理費</td>
      </tr>
    </thead>
    <tbody>
      {data.map((d, i) => (
        <tr key={i}>
          <TdHead d={d} />
          {calcExpenseTds(d)}
        </tr>
      ))}
    </tbody>
  </CommonTable>
);

const ExpPane = ({ eventKey, data }) => (
  <PaneTemplate eventKey={eventKey}>
    <h3>営業費用</h3>
    <div style={{textAlign: 'right'}}>
      <small>単位: 百万円</small>
    </div>
    <ExpTable data={data} />
  </PaneTemplate>
);

function calcExpenseTds(d) {
  return d['年'] < 2011 ? (
    <Fragment>
      <td className="em">{d['営業費用']}</td>
      <td>{d['チーム人件費']}</td>
      <td colSpan={6}>{d['事業費']}</td>
      <td colSpan={1}>{d['販売費および一般管理費']}</td>
    </Fragment>
  ) : d['年'] < 2016 ? (
    <Fragment>
      <td className="em">{d['営業費用']}</td>
      <td>{d['チーム人件費']}</td>
      <td>{d['試合関連経費']}</td>
      <td>{d['トップチーム運営経費']}</td>
      <td>{d['アカデミー運営経費']}</td>
      <td>{d['女子チーム運営経費']}</td>
      <td colSpan={3}>{d['販売費および一般管理費']}</td>
    </Fragment>
  ) : (
    <Fragment>
      <td className="em">{d['営業費用']}</td>
      <td>{d['チーム人件費']}</td>
      <td>{d['試合関連経費']}</td>
      <td>{d['トップチーム運営経費']}</td>
      <td>{d['アカデミー運営経費']}</td>
      <td>{d['女子チーム運営経費']}</td>
      <td>{d['物販関連費']}</td>
      <td colSpan={2}>{d['販売費および一般管理費']}</td>
    </Fragment>
  );
}

export default ExpPane;