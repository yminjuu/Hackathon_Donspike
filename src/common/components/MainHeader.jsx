import styled, { css } from 'styled-components';
import LogoButton from './LogoButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Blackfoodwiki from '../assets/Blackfoodwiki.svg?react';
import Blackgraph from '../assets/Blackgraph.svg?react';
import Whitefoodwiki from '../assets/Whitefoodwiki.svg?react';
import Whitegraph from '../assets/Whitegraph.svg?react';

const MainHeader = ({ currState }) => {
  const navigate = useNavigate();
  console.log(currState);

  const [navState, setNavstate] = useState(currState);
  // 기본값 graphState

  const onLogout = () => {
    console.log('로그아웃');
    navigate('/');
    // 로그아웃하면 랜딩페이지로?
  };

  // nav 변경 관리
  const onNavClick = navkey => {
    console.log(navkey);
    console.log(navState, navkey);
    if (navState === 'graph' && navkey === 'foodwiki') {
      // 현재 그래프 상태이고 foodwiki를 눌렀을 때
      navigate('/foodWiki');
      console.log('눌림');
    } else if (navState === 'foodwiki' && navkey === 'graph') {
      // 현재 푸드위키 상태이고 graph를 눌렀을 때
      setNavstate('freq');
      navigate('/main');
      console.log('눌림2');
    }
  };

  return (
    <>
      <StyledMainHeader>
        <LogoButton></LogoButton>
        {/* 클릭시 그래프 페이지로 이동함 */}
        <PageStateSection>
          <ButtonsWrapper>
            <GraphNavigateButtonWrapper
              $navState={navState}
              onClick={() => {
                onNavClick('graph');
              }}
            >
              {navState === 'graph' ? <Whitegraph></Whitegraph> : <Blackgraph></Blackgraph>}
              마이그래프
            </GraphNavigateButtonWrapper>

            <FoodWikiButtonWrapper $navState={navState} onClick={() => onNavClick('foodwiki')}>
              {/* 검색 아이콘 svg */}
              {navState === 'foodwiki' ? <Whitefoodwiki></Whitefoodwiki> : <Blackfoodwiki></Blackfoodwiki>}
              혈당백과
            </FoodWikiButtonWrapper>
          </ButtonsWrapper>
        </PageStateSection>
        <LogoutSection onClick={onLogout}>
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.25 6.874C7.25 7.28821 7.58579 7.624 8 7.624C8.41421 7.624 8.75 7.28821 8.75 6.874H7.25ZM8.75 1C8.75 0.585786 8.41421 0.25 8 0.25C7.58579 0.25 7.25 0.585786 7.25 1H8.75ZM5.31082 3.66156C5.68779 3.48991 5.85422 3.04515 5.68256 2.66818C5.51091 2.29121 5.06615 2.12478 4.68918 2.29644L5.31082 3.66156ZM1 9.16L0.249903 9.15607L0.250051 9.16873L1 9.16ZM8 16L8.00861 15.25C8.00287 15.25 7.99713 15.25 7.99139 15.25L8 16ZM15 9.16L15.7501 9.16873L15.75 9.15607L15 9.16ZM11.3108 2.29644C10.9338 2.12478 10.4891 2.29121 10.3174 2.66818C10.1458 3.04515 10.3122 3.48991 10.6892 3.66156L11.3108 2.29644ZM8.75 6.874V1H7.25V6.874H8.75ZM4.68918 2.29644C1.99843 3.52171 0.265503 6.19951 0.25001 9.15607L1.74999 9.16393C1.76242 6.79237 3.15246 4.6444 5.31082 3.66156L4.68918 2.29644ZM0.250051 9.16873C0.299349 13.4046 3.77278 16.7986 8.00861 16.75L7.99139 15.25C4.58384 15.2892 1.78961 12.5588 1.74995 9.15127L0.250051 9.16873ZM7.99139 16.75C12.2272 16.7986 15.7007 13.4046 15.7499 9.16873L14.2501 9.15127C14.2104 12.5588 11.4162 15.2892 8.00861 15.25L7.99139 16.75ZM15.75 9.15607C15.7345 6.19951 14.0016 3.52171 11.3108 2.29644L10.6892 3.66156C12.8475 4.6444 14.2376 6.79237 14.25 9.16393L15.75 9.15607Z"
              fill="#111111"
            />
          </svg>
          <div style={{ color: '#111111', fontSize: '1rem', fontWeight: '500', display: 'flex' }}>로그아웃</div>
        </LogoutSection>
      </StyledMainHeader>
    </>
  );
};

const StyledMainHeader = styled.header`
  width: 100%;
  height: 8vh;
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
  background: rgba(255, 255, 255, 0.2);
`;

const PageStateSection = styled.div``;

const LogoutSection = styled.div`
  width: 10vw;
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
`;

const GraphNavigateButtonWrapper = styled.button`
  width: 7rem;
  height: 2.5rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  opacity: var(--sds-size-stroke-border);
  background: #000;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  color: var(--Grayscale-White, #fff);
  /* Pretendard/Sb/16 */

  font-size: 0.83rem;
  font-weight: 600;

  ${props =>
    props.$navState !== 'graph'
      ? css`
          background: transparent;
          color: black;
        `
      : css``}
`;

const FoodWikiButtonWrapper = styled.button`
  width: 7rem;
  height: 2.5rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  opacity: var(--sds-size-stroke-border);
  background: #000;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  color: var(--Grayscale-White, #fff);
  /* Pretendard/Sb/16 */

  font-size: 0.83rem;
  font-weight: 600;

  ${props =>
    props.$navState !== 'foodwiki'
      ? css`
          background: transparent;
          color: black;
        `
      : css``}
`;

export default MainHeader;

// 페이지 상단에 sticky하게 달라붙어 있는 헤더
// 페이지 스크롤을 해도 그대로여야 함.
