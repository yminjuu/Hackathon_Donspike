import MainBloodSugarChart from '../../Graphs/components/MainBloodSugarChart';
import { commonGraphWrapper } from '../../common/styles/commonStyles';
import styled from 'styled-components';

const MainBloodSugar = () => {
  return (
    <>
      {/* 제목 */}
      아침 공복 혈당 그래프
      <ChartWrapper>
        asfafasdf
        <MainBloodSugarChart></MainBloodSugarChart>
      </ChartWrapper>
    </>
  );
};

const ChartWrapper = styled.div`
  ${commonGraphWrapper}
  width : 100%;
  flex-shrink: 0;
`;

export default MainBloodSugar;
