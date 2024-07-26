const CustomBarShape = props => {
  const { x, y, width, height, fill, index, totalCount } = props;

  const opacity = 1 - index / totalCount;
  // 해당 데이터의 인덱스에 따라 투명도 조절

  return <rect x={x} y={y} rx={10} ry={10} width={width} height={height} fill={fill} opacity={opacity} />;
};

export default CustomBarShape;
