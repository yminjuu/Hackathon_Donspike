import styled from 'styled-components';
import LogoButton from './LogoButton';

const MainHeader = () => {
  return (
    <>
      <StyledMainHeader>
        <LogoButton></LogoButton>
        <StyledNav>
          <FoodWikiButtonWrapper>
            {/* 검색 아이콘 svg */}
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <circle cx="6.08703" cy="6.08703" r="5.32615" stroke="white" stroke-width="1.52176" />
              <path d="M12.1741 12.1738L16 15.9998" stroke="white" stroke-width="1.52176" stroke-linecap="round" />
            </svg>
            푸드위키
          </FoodWikiButtonWrapper>
        </StyledNav>
      </StyledMainHeader>
    </>
  );
};

const StyledMainHeader = styled.header`
  width: 100%;
  height: 6.9%; //전체 화면에 대해 6.9%
  position: sticky;
  top: 0;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  background: transparent;

  /* // 헤더의 border */
  border-bottom: 1px solid #cfcfcf;
  opacity: var(--sds-size-stroke-border);
  background: rgba(255, 255, 255, 0.2);
`;

const StyledNav = styled.nav`
  margin-right: 2.5rem;
`;

const FoodWikiButtonWrapper = styled.button`
  width: 5.7rem;
  height: 1.8rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  opacity: var(--sds-size-stroke-border);
  background: #000;
  padding-left: 0.8rem;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;

  color: var(--Grayscale-White, #fff);
  /* Pretendard/Sb/16 */
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default MainHeader;

// 페이지 상단에 sticky하게 달라붙어 있는 헤더
// 페이지 스크롤을 해도 그대로여야 함.
