import FoodBarChart from '../Graphs/components/FoodBarChart';
import styled from 'styled-components';
import { commonGraphWrapper } from '../common/styles/commonStyles';
import { commonChartTitle } from '../common/styles/commonStyles';
import { useEffect } from 'react';

const FoodBar = () => {
  useEffect(() => {
    console.log('FoodBar 리렌더링');
  });

  return (
    <>
      <ChartWrapper>
        <ChartTitle>최근 30일 간 가장 자주 먹은 음식</ChartTitle>
        <FoodBarChart></FoodBarChart>
      </ChartWrapper>
    </>
  );
};

const ChartWrapper = styled.div`
  ${commonGraphWrapper}
  width: 35.75rem;
  height: 21.75rem;
  flex-shrink: 0;
`;

const ChartTitle = styled.div`
  ${commonChartTitle}
  font-size: 1.4rem;
  font-weight: 700;
  margin: 1.5rem;
`;

export default FoodBar;
