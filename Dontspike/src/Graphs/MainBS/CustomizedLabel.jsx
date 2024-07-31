// label 커스텀
const CustomizedLabel = ({ x, y, stroke, value, dataMax }) => {
  // 개인 혈당 최고값과의 차이를 구해서 위험도를 측정
  const offset = dataMax - value;

  // 위험도가 높으면 빨간색으로 출력, 그렇지 않으면 검정색으로 출력
  return (
    <>
      {offset < 10 ? (
        <text x={x} y={y} dy={-12} fill="red" fontSize={13} fontWeight="600" textAnchor="middle">
          {value}
        </text>
      ) : (
        <text x={x} y={y} dy={-13} fill={stroke} fontSize={11} textAnchor="middle">
          {value}
        </text>
      )}
    </>
  );
};

export default CustomizedLabel;
