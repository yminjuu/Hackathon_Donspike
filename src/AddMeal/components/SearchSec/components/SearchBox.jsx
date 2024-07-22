import styled from 'styled-components';
import Hamburger from '../imgs/Hamburger.svg?react';
import FrenchFries from '../imgs/FrenchFries.svg?react';
import SearchButton from '../imgs/SearchButton.svg?react';

const SearchBox = () => {
  const onSearchBtnClick = () => {
    // console.log('검색 버튼 눌림');
  };
  return (
    <Container>
      <Wrapper>
        <StyledInput placeholder="예) 흰쌀밥, 생오이"></StyledInput>
        <ButtonWrapper onClick={onSearchBtnClick}>
          <SearchButton></SearchButton>
        </ButtonWrapper>
      </Wrapper>
      <TransparentWrapper>
        <StyledHamb></StyledHamb>
        <StyledFrench></StyledFrench>
      </TransparentWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 33.75rem;
  height: 3.375rem;

  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 80%;
  color: #a0a0a0;

  /* Pretendard/Reg/20 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border: none;
  outline: none;

  &::placeholder {
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #a0a0a0;
  }
`;

const ButtonWrapper = styled.div`
  width: 1.33069rem;
  height: 1.33069rem;
  flex-shrink: 0;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  width: 33.75rem;
  height: 3.375rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;

  /* drop-shadow */
  box-shadow: 2px 4px 10px 2px #e8e8e8;
  border-radius: 10px;
  background-color: white;

  z-index: 3;
`;

// 햄버거, 감튀 요소의 position: absolute을 위해 존재하는 투명한 컨테이너 (z-index 사용을 위해서)
const TransparentWrapper = styled.div`
  width: 33.75rem;
  height: 3.375rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 2;
`;

const StyledHamb = styled(Hamburger)`
  position: absolute;
  top: -140%;
  left: 80%; /* Adjust based on the position of the icon */
  z-index: 1;
`;

const StyledFrench = styled(FrenchFries)`
  position: absolute;
  top: -120%;
  left: 91%; /* Adjust based on the position of the icon */
  z-index: 1;
`;
export default SearchBox;
