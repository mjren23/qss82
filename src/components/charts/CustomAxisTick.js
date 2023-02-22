import { PureComponent } from "react";

class CustomAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={5} textAnchor="end" fill="#666" transform="rotate(-90)">
          {payload.value}
        </text>
      </g>
    );
  }
}

export default CustomAxisTick;