import SearchSection from '../components/SearchSec/SearchSection';
import FoodNavigationSection from '../components/FoodNavSec/FoodNavigationSection';
import styled from 'styled-components';
import SubPageHeader from '../../common/components/SubPageHeader';
import { useState } from 'react';

const AddMealPage = () => {
  // SearchSection에서 선택된 날짜 관리
  const [selectedDate, setSelectedDate] = useState();

  const fetchMeal = async ({ food_id }) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/diet/add-food`, {
        food_id: food_id,
        // 날짜도 필요?
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
