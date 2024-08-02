import SearchSection from '../components/SearchSec/SearchSection';
import FoodNavigationSection from '../components/FoodNavSec/FoodNavigationSection';
import styled from 'styled-components';
import SubPageHeader from '../../common/components/SubPageHeader';
import { useState } from 'react';
import axios from 'axios';

const AddMealPage = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  // SearchSection에서 선택된 날짜 관리
  const [selectedDate, setSelectedDate] = useState();

  const fetchMeal = async food_id => {
    try {
      console.log('fetchMeal');
      console.log(food_id); // 알맞게 받아오고 있음

      // {
      //   "foodId": 2,
      //   "date": 2024-08-02,
      // }

      const res = await axios.post(`${BASE_URL}/api/diet/add-food`, {
        foodId: 1,
        date: '2024-08-02', // 날짜 데이터 형식 이거 맞는지
      });

      if (res.status === 200) {
        console.log('식단 추가 성공 ', res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageBackground>
        <SubPageHeader></SubPageHeader>
        <ContentWrapper>
          <SearchSection setSelectedDate={setSelectedDate} fetchMeal={fetchMeal}></SearchSection>
          <FoodNavigationSection selectedDate={selectedDate} fetchMeal={fetchMeal}></FoodNavigationSection>
        </ContentWrapper>
      </PageBackground>
    </>
  );
};
// 1. 검색창
// 2. 메뉴 탭
// 3. 리스트 or 직접 등록 화면

const PageBackground = styled.div`
  // 사용자가 보는 화면의 크기가 page의 크기가 됨
  width: 100%;
  height: 100%;

  background-color: #f0f1f5;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default AddMealPage;
