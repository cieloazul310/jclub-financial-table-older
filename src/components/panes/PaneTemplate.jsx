import React from 'react';
import { Pane } from 'react-bootstrap/lib/Tab';

import './PaneTemplate.css';

const PaneTemplate = ({ eventKey, children }) => (
  <Pane eventKey={eventKey} className="pane-template">
    {children}
  </Pane>
);

export default PaneTemplate;