const CustomLabel = props => {
  const { x, y, width, height, value } = props;
  const radius = 10; // border-radius 설정
  const bgColor = '#EBEEFF'; // 배경색 설정
  const textColor = '#707070'; // 글씨 색상 설정

  return (
    <g>
      <rect x={x + width / 2 - 20} y={y - 25} width="40" height="20" fill={bgColor} rx={radius} ry={radius} />
      <text x={x + width / 2} y={y - 10} fill={textColor} textAnchor="middle">
        {value}
      </text>
    </g>
  );
};

export default CustomLabel;
