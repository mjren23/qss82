import star from '../../resources/star.svg';

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;

  if (cx == null || cy == null) {
    console.log("returning null")
    return (<svg></svg>);
  }

  if (stroke === "#f0244d") {
    console.log("returning here")
    return (
      <svg x={cx - 8} y={cy - 8} width={15} height={15} fill={stroke} xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill={stroke}/>
      </svg>

    );
  }
  else if (stroke === "#00244d") {
    console.log("returning here")
    return (
      <svg x={cx - 8} y={cy - 8} width={15} height={15} fill={stroke} xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.5" cy="7.5" r="7.5" fill={stroke}/>
      </svg>
    );
  }
  else if (stroke === "#3f34bf") {
    console.log("returning here")
    return (
      <svg x={cx - 8} y={cy - 8} width={15} height={15} fill={stroke} xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 0L12.9952 11.25H0.00480938L6.5 0Z" fill={stroke}/>
      </svg>
    );
  }
  else if (stroke === "#28c738") {
    console.log("returning here")
    return (
      <svg x={cx - 8} y={cy - 8} width={15} height={15} fill={stroke} xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0L13.6574 4.83688L11.1145 12.6631H2.8855L0.342604 4.83688L7 0Z" fill={stroke}/>
      </svg>
    );
  }

  return (
    <svg x={cx - 8} y={cy - 8} width={15} height={15} fill={stroke} xmlns="http://www.w3.org/2000/svg">
      <rect width="13" height="13" fill={stroke}/>
    </svg>
  );
};

export default CustomizedDot;