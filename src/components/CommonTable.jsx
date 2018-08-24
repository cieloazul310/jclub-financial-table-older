import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import './CommonTable.css';

const CommonTable = ({ children }) => (
  <Table className="data-table" responsive hover>
    {children}
  </Table>
);

const TdHead = ({ d, type }) =>
  type === 'thead' ? (
    <Fragment>
      <td className="td-head td-year">年</td>
      <td className="td-head">所属</td>
      <td className="td-head">順位</td>
    </Fragment>
  ) : (
    <Fragment>
      <td className="td-head td-year">{d['年']}</td>
      <td className="td-head">{d['所属']}</td>
      <td className="td-head">{d['順位']}</td>
    </Fragment>
  );
  
export default CommonTable;
export { TdHead };