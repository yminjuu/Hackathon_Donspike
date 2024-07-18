import styled from 'styled-components';
import FoodCarousel from './FoodCarousel';

const FoodInfo = () => {
  return (
    <>
      <StyledDiv>
        <SearchContainer>
          <div>돈스파이크</div>
          <div>음식을 검색해보세요! 혈당 관리에 도움이 되는 방법을 함께 알려드릴게요.</div>
          <StyledSearchInput type="text" name="food" id="food" placeholder="예)사과, 상추"></StyledSearchInput>
        </SearchContainer>
        <RecentFoodContainer>
          <div>최근 먹은 음식</div>
          <FoodCarousel></FoodCarousel>
        </RecentFoodContainer>
      </StyledDiv>
    </>
  );
};

// 임시
const StyledDiv = styled.div`
  height: 100%;
  text-align: center;
  background-color: #f0d3d3;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  gap: 50px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSearchInput = styled.input`
  height: 50px;
  text-align: center;
  font-size: 17px;
`;

const RecentFoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 50px;
`;

export default FoodInfo;
