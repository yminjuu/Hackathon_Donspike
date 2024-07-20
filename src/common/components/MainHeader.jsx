import styled from 'styled-components';
import LogoButton from './LogoButton';

const MainHeader = () => {
  return (
    <>
      <StyledMainHeader>
        <LogoButton></LogoButton>
        <StyledNav>
          <StyledUl>
            <FoodWikiButtonWrapper>
              {/* 검색 아이콘 svg */}
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <circle cx="6.08703" cy="6.08703" r="5.32615" stroke="white" stroke-width="1.52176" />
                <path d="M12.1741 12.1738L16 15.9998" stroke="white" stroke-width="1.52176" stroke-linecap="round" />
              </svg>
              푸드위키
            </FoodWikiButtonWrapper>
          </StyledUl>
        </StyledNav>
      </StyledMainHeader>
    </>
  );
};

const StyledMainHeader = styled.header`
  height: 100px;
  padding: 24px 40px;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  background: transparent;

  /* // 헤더의 border */
  border-bottom: 1px solid #cfcfcf;
  opacity: var(--sds-size-stroke-border);
  background: rgba(255, 255, 255, 0.2);
`;

const StyledNav = styled.nav`
  margin-right: 10px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FoodWikiButtonWrapper = styled.button`
  width: 114px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 30px;
  opacity: var(--sds-size-stroke-border);
  background: #000;
  padding: 9px 19px 8px 16px;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5px;

  color: var(--Grayscale-White, #fff);
  /* Pretendard/Sb/16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledLi = styled.li`
  margin-right: 10px;
  display: inline;
  cursor: pointer;
`;

export default MainHeader;

// 페이지 상단에 sticky하게 달라붙어 있는 헤더
// 페이지 스크롤을 해도 그대로여야 함.
