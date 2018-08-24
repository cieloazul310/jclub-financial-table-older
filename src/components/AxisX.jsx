import React from 'react';

const AxisX = ({ scale, size, padding }) => (
  <g className="x-axis">
    {scale.domain().map((d, i, arr) => (
      <g
        key={i}
        transform={`translate(${scale(d)}, ${size.height -
          padding.bottom * size.scale})`}
      >
        <text
          textAnchor="middle"
          dy="1em"
          style={{ fontSize: `${Math.max(70, size.scale * 100)}%` }}
        >
          {i !== 0 && i !== arr.length - 1
            ? d.toString().slice(-2)
            : d}
        </text>
      </g>
    ))}
  </g>
);

export default AxisX;