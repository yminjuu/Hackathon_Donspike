import SearchSection from '../components/SearchSec/SearchSection';
import FoodNavigationSection from '../components/FoodNavSec/FoodNavigationSection';
import styled from 'styled-components';
import SubPageHeader from '../../common/components/SubPageHeader';

const AddMealPage = () => {
  return (
    <>
      <PageBackground>
        <SubPageHeader></SubPageHeader>
        <ContentWrapper>
          <SearchSection></SearchSection>
          <FoodNavigationSection></FoodNavigationSection>
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
