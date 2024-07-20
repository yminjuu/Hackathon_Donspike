import styled from 'styled-components';
import LogoButton from './LogoButton';

const MainHeader = () => {
  return (
    <>
      <StyledMainHeader>
        <LogoButton></LogoButton>
        <StyledNav>
          <StyledUl>
            <StyledLi>커뮤니티</StyledLi>
            <StyledLi>다이어리</StyledLi>
            <StyledLi>마이페이지</StyledLi>
            {/* li 태그 클릭시 routing 필요 */}
          </StyledUl>
        </StyledNav>
      </StyledMainHeader>
    </>
  );
};

const StyledMainHeader = styled.header`
  height: 44px;
  position: sticky;
  padding-top: 20px;
  top: -20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100; // 높은 z-index 값 설정
  font-size: 20px;
  border-bottom: 1px solid black;
  background: transparent;
`;

const StyledLogo = styled.img`
  width: 200px;
  cursor: pointer;
`;

const StyledNav = styled.nav`
  margin-right: 10px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledLi = styled.li`
  margin-right: 10px;
  display: inline;
  cursor: pointer;
`;

export default MainHeader;

// 페이지 상단에 sticky하게 달라붙어 있는 헤더
// 페이지 스크롤을 해도 그대로여야 함.
