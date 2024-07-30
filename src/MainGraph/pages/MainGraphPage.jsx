import MainHeader from '../../common/components/MainHeader';
import MainBloodSugar from '../../Sec1_MainBloodSugar/MainBloodSugar';
import AverageBloodSugar from '../../Sec3_AverageBloodSugar/AverageBloodSugar';
import FoodBar from '../../Sec2_FoodBar/FoodBar';

import styled from 'styled-components';
import background from '../assets/imgs/background.svg';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const MainGraphPage = () => {
  // 혈당값 입력시 데이터 업데이트를 위한 데이터 관리
  const [bloodSugar, setBS] = useState(null);

  // 식단 입력시 데이터 업데이트를 위한 데이터 관리
  const [meal, setMeal] = useState(null);

  // 혈당 + 식단 데이터 관리

  // foodbar 데이터 관리

  // 평균 혈당 데이터 관리

  // 혈당 값 입력시 2가지 그래프 업데이트해주는 함수 - 메인/ 평균 혈당
  useEffect(() => {
    fetchBSData();
  }, [bloodSugar]);

  // 식단 입력시 2가지 그래프 업데이트해주는 함수- 식단&혈당 그래프, foodbar 그래프
  useEffect(() => {
    fetchMealData();
  }, [meal]);

  const fetchBSData = async () => {
    // 혈당+식단 데이터를 가져오는 axios 로직 추가하여
    // 평균 혈당 데이터를 가져오는 axios 로직 추가
  };

  const fetchMealData = async () => {
    // 혈당+식단 데이터를 가져오는 axios 로직 추가
    // 식단 데이터를 가져오는 axios 로직 추가
  };

  return (
    <>
      <PageBackground>
        <MainHeader></MainHeader>
        <SectionsWrapper>
          {/* 제목 + 혈당 섹션 */}
          <SectionWrapper>
            <MainBloodSugar setMeal={setMeal} setBS={setBS}></MainBloodSugar>
          </SectionWrapper>
          {/* 구분선 추가 */}
          <HorizonWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="1292" height="1" viewBox="0 0 1292 1" fill="none">
              <path d="M1 0.5L1291 0.5" stroke="#CFCFCF" strokeLinecap="round" />
            </svg>
          </HorizonWrapper>
          {/* 하단 그래프 2개 섹션*/}
          <SectionWrapper2>
            <FoodBar></FoodBar>
            <AverageBloodSugar></AverageBloodSugar>
          </SectionWrapper2>
        </SectionsWrapper>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  background-image: url(${background});
  background-size: cover;
`;

const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1.1rem 4.69rem 1.3rem 4.69rem;
`;

const SectionWrapper2 = styled.section`
  display: flex;
  flex-direction: row;
  margin: 1.3rem 4.69rem 2.5rem 4.69rem;
  justify-content: center;
  gap: 1.13rem;
`;

const HorizonWrapper = styled.div`
  width: 80.625rem;
  height: 1.75rem;
  flex-shrink: 0;
`;
export default MainGraphPage;
