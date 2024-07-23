import AverageBloodSugarChart from '../Graphs/components/AverageBloodSugarChart';
import styled from 'styled-components';
import { commonGraphWrapper } from '../common/styles/commonStyles';
import { commonChartTitle } from '../common/styles/commonStyles';
import AverageGraphToolTip from './components/AverageGraphToolTip';

const AverageBloodSugar = () => {
  return (
    <>
      <ChartWrapper>
        <ChartTitle>월별 공복 혈당 평균</ChartTitle>
        <GraphWrapper>
          <AverageBloodSugarChart></AverageBloodSugarChart>
          <AverageGraphToolTip></AverageGraphToolTip>
        </GraphWrapper>
      </ChartWrapper>
    </>
  );
};

const ChartWrapper = styled.div`
  ${commonGraphWrapper}
  width: 43.75rem;
  height: 21.75rem;
  flex-shrink: 0;
`;

const ChartTitle = styled.div`
  ${commonChartTitle}
  font-size: 1.25rem;
  font-weight: 500;
  margin: 1.5rem;
`;

const GraphWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default AverageBloodSugar;
