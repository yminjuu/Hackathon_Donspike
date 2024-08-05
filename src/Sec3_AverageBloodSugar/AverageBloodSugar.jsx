import AverageBloodSugarChart from '../Graphs/components/AverageBloodSugarChart';
import styled from 'styled-components';
import { commonGraphWrapper } from '../common/styles/commonStyles';
import { commonChartTitle } from '../common/styles/commonStyles';
import AverageGraphToolTip from './components/AverageGraphToolTip';
import { useEffect } from 'react';

const AverageBloodSugar = ({ fetchAverageData, averageData }) => {
  var offset = 0;
  if (averageData.length > 1) {
    const length = averageData.length;
    offset = parseInt(averageData[length - 1] - averageData[length - 2]);
  }

  return (
    <>
      <ChartWrapper>
        <ChartTitle>월별 공복 혈당 평균</ChartTitle>
        <GraphWrapper>
          <AverageBloodSugarChart
            fetchAverageData={fetchAverageData}
            averageData={averageData}
          ></AverageBloodSugarChart>
          {averageData.length > 2 ? <AverageGraphToolTip offset={offset}></AverageGraphToolTip> : <></>}
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
  font-size: 1.4rem;
  font-weight: 700;
  margin: 1.5rem;
`;

const GraphWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default AverageBloodSugar;
