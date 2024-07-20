import MainHeader from '../../common/components/MainHeader';
import MainBloodSugar from '../components/MainBloodSugar';
import AverageBloodSugar from '../components/AverageBloodSugar';
import FoodBar from '../components/FoodBar';

import styled from 'styled-components';
import background from '../assets/imgs/background.svg';

const MainGraphPage = () => {
  return (
    <>
      <PageBackground>
        <MainHeader></MainHeader>
        {/* 제목 + 혈당 섹션 */}
        <SectionWrapper>
          <MainBloodSugar></MainBloodSugar>
        </SectionWrapper>
        {/* 구분선 추가 */}
        <HorizonWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" width="1292" height="1" viewBox="0 0 1292 1" fill="none">
            <path d="M1 0.5L1291 0.5" stroke="#CFCFCF" stroke-linecap="round" />
          </svg>
        </HorizonWrapper>

        {/* 하단 그래프 2개 섹션*/}
        <SectionWrapper2>
          <FoodBar></FoodBar>
          <AverageBloodSugar></AverageBloodSugar>
        </SectionWrapper2>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  background-image: url(${background});
  background-size: cover;
`;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 85px 75px 33px 75px;
`;

const SectionWrapper2 = styled.section`
  display: flex;
  flex-direction: row;
  margin: 33px 75px 62px 75px;
  justify-content: space-between;
`;

const HorizonWrapper = styled.div`
  margin: 0px 86px;
`;
export default MainGraphPage;
