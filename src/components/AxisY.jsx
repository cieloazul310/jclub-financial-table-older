import React from 'react';

import './AxisY.css';

const AxisY = ({ scale, size, padding, label, format = d => d }) => (
  <g className="y-axis">
    {scale.ticks().map((d, i) => (
      <g key={i} className={d === 0 ? 'tick-domain' : 'tick'} transform={`translate(0, ${scale(d)})`}>
        <line x2={size.width - padding.right * size.scale} />
        <text
          x={padding.left * size.scale}
          textAnchor="end"
          dx="-.2em"
          dy="-.2em"
          style={{ fontSize: `${Math.max(65, size.scale * 100)}%` }}
        >
          {format(d)}
        </text>
      </g>
    ))}
    {label ? <text className="axis-label" dy="1em" style={{ fontSize: `${Math.max(75, size.scale * 100)}%` }}>{label}</text> : null}
  </g>
);

export default AxisY;