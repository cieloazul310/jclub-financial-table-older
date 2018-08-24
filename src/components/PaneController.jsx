import React from 'react';
import {
  Col,
  Nav,
  NavItem,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

import './PaneController.css';

const ControlItems = [
  { eventKey: 'pl', label: '損益計算書' },
  { eventKey: 'bs', label: '貸借対照表' },
  { eventKey: 'revenue', label: '営業収入' },
  { eventKey: 'expense', label: '営業費用' },
  { eventKey: 'attd', label: '入場者数' }
];

const PaneController = () => (
  <Col sm={12} xsHidden>
    <Nav bsStyle="tabs" justified className="pane-controller">
      {ControlItems.map((d, i) => (
        <NavItem key={d.eventKey} eventKey={d.eventKey}>
          {d.label}
        </NavItem>
      ))}
    </Nav>
  </Col>
);

const MobilePaneController = ({ handleTab }) => (
  <Col xs={12} smHidden mdHidden lgHidden>
    <FormGroup
      controlId="formControlsSelect"
      className="pane-controller-mobile"
      onChange={e => {
        handleTab(e.target.value);
      }}
    >
      <ControlLabel>表示項目</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        {ControlItems.map((d, i) => (
          <option key={d.eventKey} value={d.eventKey}>
            {d.label}
          </option>
        ))}
      </FormControl>
    </FormGroup>
  </Col>
);

export { PaneController, MobilePaneController };
