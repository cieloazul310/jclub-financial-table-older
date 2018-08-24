import React from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';

const AppHeader = ({ title, onSetSidebarOpen }) => (
  <Row>
    <Col
      xs={12}
      smHidden
      mdHidden
      lgHidden
      className="club-selector-header"
    >
      <button
        className="header-button"
        onClick={() => onSetSidebarOpen(true)}
      >
        <Glyphicon glyph="menu-hamburger" />
      </button>
      <span className="title">
        {title}
      </span>
    </Col>
    <Col xsHidden sm={12} className="club-selector-header">
      <span className="title">
        {title}
      </span>
    </Col>
  </Row>
);

export default AppHeader;