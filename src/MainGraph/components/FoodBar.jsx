import FoodBarChart from '../../Graphs/components/FoodBarChart';
import styled from 'styled-components';
import { commonGraphWrapper } from '../../common/styles/commonStyles';

const FoodBar = () => {
  return (
    <>
      <ChartWrapper>
        최근 30일 간 가장 자주 먹은 음식
        <FoodBarChart></FoodBarChart>
      </ChartWrapper>
    </>
  );
};

const ChartWrapper = styled.div`
  ${commonGraphWrapper}
  width: 572px;
  height: 410px;
  flex-shrink: 0;
`;

export default FoodBar;
