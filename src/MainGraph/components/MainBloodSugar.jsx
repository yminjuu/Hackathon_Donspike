import MainBloodSugarChart from '../../Graphs/components/MainBloodSugarChart';
import { commonGraphWrapper } from '../../common/styles/commonStyles';
import { commonChartTitle } from '../../common/styles/commonStyles';
import styled from 'styled-components';
import MainBloodSugarIcon from '../assets/imgs/MainBloodSugarIcon.svg?react';
import AddMealButton from '../assets/imgs/AddMealButton.svg?react';

const MainBloodSugar = () => {
  return (
    <>
      {/* 제목 */}
      <TitleWrapper>
        <ChartTitle>아침 공복 혈당 그래프</ChartTitle>
        <MainBloodSugarIcon></MainBloodSugarIcon>
      </TitleWrapper>
      <ChartWrapper>
        <Graph_DiscriptSec>
          <InfoWrapper>
            <AddInfo>
              8시간 공복 후의 <AddSpan>아침 공복 혈당</AddSpan>을 추가해주세요.
              <br />
              <AddSpan>식단</AddSpan>도 함께 추가하시면 더욱 정확한 기록이 가능합니다.
            </AddInfo>
            <AddMealButton>식단 추가하기</AddMealButton>
          </InfoWrapper>
          <MainBloodSugarChart></MainBloodSugarChart>
        </Graph_DiscriptSec>
        <RecordSec>{/* 혈당 기록 섹션 */}</RecordSec>
      </ChartWrapper>
    </>
  );
};

const TitleWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ChartTitle = styled.div`
  ${commonChartTitle}
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.8rem;
  padding-right: 0.5rem;
`;

const ChartWrapper = styled.div`
  ${commonGraphWrapper}
  width: 80.625rem;
  height: 25.9375rem;
  flex-shrink: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
`;

// 설명/ 식단추가하기 / 그래프 섹션
const Graph_DiscriptSec = styled.div`
  width: 62.5%;
  display: flex;
  flex-direction: column;
`;

// 혈당 기록하기 섹션
const RecordSec = styled.div`
  width: 28.75%;
  height: 20.75rem;
  flex-shrink: 0;
  margin: 2.06rem 1.5rem 3.12rem;

  border-radius: 0.625rem;
  background: #fff;
  /* drop-shadow */
  box-shadow: 2px 4px 10px 2px var(--Grayscale-10, #e8e8e8);
`;

// 설명 + 식단 추가 버튼의 wrapper
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.3rem 4.3rem 2.3rem 3.4rem;
`;

const AddInfo = styled.div`
  color: var(--Grayscale-80, #414141);

  /* Pretendard/Md/16 */
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  opacity: var(--sds-size-stroke-border);
`;

const AddSpan = styled.span`
  opacity: var(--sds-size-stroke-border);
  color: var(--Primary-100, #3053f9);

  /* Pretendard/Md/16 */
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default MainBloodSugar;
