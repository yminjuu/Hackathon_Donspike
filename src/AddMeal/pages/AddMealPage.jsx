import SearchSection from '../components/SearchSec/SearchSection';
import FoodNavigationSection from '../components/FoodNavSec/FoodNavigationSection';
import styled from 'styled-components';
import SubPageHeader from '../../common/components/SubPageHeader';
import { useState } from 'react';
import axios from 'axios';

const formatDate = date => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더합니다.
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const AddMealPage = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const userId = 1;
  // SearchSection에서 선택된 날짜 관리
  const [selectedDate, setSelectedDate] = useState();

  const fetchMeal = async foodId => {
    const date = new Date(selectedDate);
    console.log('food id: ', foodId);
    console.log('포맷된 날짜형식', formatDate(date));
    console.log('userId: ', userId);
    try {
      const res = await axios.post(`${BASE_URL}/api/diet/add-food`, {
        foodId: foodId,
        date: formatDate(date),
        userId,
      });
      console.log('식단에 추가 API 결과 : ', res);
      if (res.status === 200) {
        console.log('식단 추가 성공');
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
