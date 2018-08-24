import React from 'react';
import clubIds from '../clubIds';

import './ClubSelector.css';

const ClubSelector = ({ selectedId, onItemClick }) => (
  <div className="club-selector">
    <div className="club-selector-header">
      <span className="title">Menu</span>
    </div>
    <div>
      <h4>J1</h4>
      <ul>
        {clubIds['j1'].map((d, i) => (
          <a key={i} onClick={() => onItemClick(d.id)}>
            <li className={d.id === selectedId ? 'active' : ''}>{d.name}</li>
          </a>
        ))}
      </ul>
    </div>
    <hr />
    <div>
      <h4>J2</h4>
      <ul>
        {clubIds['j2'].map((d, i) => (
          <a key={i} onClick={() => onItemClick(d.id)}>
            <li className={d.id === selectedId ? 'active' : ''}>{d.name}</li>
          </a>
        ))}
      </ul>
    </div>
    <hr />
    <div>
      <h4>J3</h4>
      <ul>
        {clubIds['j3'].map((d, i) => (
          <a key={i} onClick={() => onItemClick(d.id)}>
            <li className={d.id === selectedId ? 'active' : ''}>{d.name}</li>
          </a>
        ))}
      </ul>
    </div>
  </div>
);

export default ClubSelector;