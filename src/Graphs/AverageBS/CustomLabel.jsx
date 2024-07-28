const CustomLabel = ({ x, y, value }) => {
  const isThisMonth = value > 200; // 이번 달 것만 받음
  const bgColor = isThisMonth ? '#3053F9' : '#EBEEFF';
  //   const borderColor = isThisMonth ? 'red' : 'black';
  const textColor = isThisMonth ? '#FFFFFF' : '#707070';

  return (
    <g>
      <rect
        x={x - 20}
        y={y - 30}
        width={40}
        height={20}
        fill={bgColor}
        // stroke={borderColor}
        strokeWidth={1}
        rx={10}
        ry={10}
      />
      <text x={x} y={y - 15} fill={textColor} fontSize={13} fontWeight="600" textAnchor="middle">
        {value}
      </text>
    </g>
  );
};

export default CustomLabel;
