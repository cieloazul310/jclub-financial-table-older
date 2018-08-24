import React, { Component } from 'react';

import './ChartContainer.css';

const defaultExtent = {
  width: [300, 800],
  height: [300, 600]
};

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: {
        width: defaultExtent.width[1],
        height: defaultExtent.height[1],
        scale: 1
      }
    };
    this.resize = this.resize.bind(this);
  }

  resize() {
    const figure = document.getElementById(this.props.id);
    const container = figure.parentNode;
    const extent = this.props.extent || defaultExtent;
    const { width } = container.getBoundingClientRect();

    const calcSize = {
      width: Math.max(extent.width[0], Math.min(width, extent.width[1])),
      height: Math.max(extent.height[0], Math.min(width, extent.height[1]))
    };
    calcSize.scale = calcSize.height / extent.height[1];

    this.setState({
      size: calcSize
    });
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }

  render() {
    const { size } = this.state;
    const { id, children, caption } = this.props;
    return (
      <div className="chart-container">
        <figure className="figure" id={id}>
          {React.cloneElement(children, {size})}
          {caption ? <figcaption>{caption}</figcaption> : null}
        </figure>
      </div>
    );
  }
}

export default ChartContainer;
