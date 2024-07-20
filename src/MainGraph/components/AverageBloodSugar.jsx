import AverageBloodSugarChart from '../../Graphs/components/AverageBloodSugarChart';
import styled from 'styled-components';
import { commonGraphWrapper } from '../../common/styles/commonStyles';

const AverageBloodSugar = () => {
  return (
    <>
      <ChartWrapper>
        월별 공복 혈당 평균
        <AverageBloodSugarChart></AverageBloodSugarChart>
      </ChartWrapper>
    </>
  );
};

const ChartWrapper = styled.div`
  ${commonGraphWrapper}
  width: 700px;
  height: 410px;
  flex-shrink: 0;
`;
export default AverageBloodSugar;
