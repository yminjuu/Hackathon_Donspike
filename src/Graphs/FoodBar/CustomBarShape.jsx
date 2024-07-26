const CustomBarShape = props => {
  const { x, y, width, height, fill, index } = props;
  const opacity = 1 - index * 0.1; // 인덱스에 따라 투명도 조절

  return <rect x={x} y={y} rx={3} ry={3} width={width} height={height} fill={fill} opacity={opacity} radius={10} />;
};

export default CustomBarShape;
