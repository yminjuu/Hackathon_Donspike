import styled, { css } from 'styled-components';
import LogoButton from './LogoButton';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import Blackfoodwiki from '../assets/Blackfoodwiki.svg?react';
import Blackgraph from '../assets/Blackgraph.svg?react';
import Whitefoodwiki from '../assets/Whitefoodwiki.svg?react';
import Whitegraph from '../assets/Whitegraph.svg?react';
import LogoutSection from './LogoutSection';

// MainHeader이 사용되는 위치 중 id context가 존재하는 2가지
import { FoodWikiIdContext } from '../../FoodWiki/pages/FoodWikiPage';
import { MainGraphIdContext } from '../../MainGraph/pages/MainGraphPage';

const MainHeader = ({ currState }) => {
  const navigate = useNavigate();
  console.log(currState);

  const [navState, setNavstate] = useState(currState);
  // graph 또는 foodwiki => 버튼 눌렀을 때 graph page로 navigate

  const user_id = useContext(FoodWikiIdContext) || useContext(MainGraphIdContext);

  // nav 변경 관리
  const onNavClick = navkey => {
    if (navState === 'graph' && navkey === 'foodwiki') {
      // 현재 그래프 상태이고 foodwiki를 눌렀을 때
      navigate(`/foodWiki/${user_id}`);
    } else if (navState === 'foodwiki' && navkey === 'graph') {
      // 현재 푸드위키 상태이고 graph를 눌렀을 때
      setNavstate('freq');
      navigate(`/main/${user_id}`);
    }
  };

  return (
    <>
      <StyledMainHeader>
        <LogoButton currState={currState}></LogoButton>
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
        <LogoutSection></LogoutSection>
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
