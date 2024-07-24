import { useState } from 'react';
import { css, styled } from 'styled-components';

const FoodNavigationSection = () => {
  const [navstate, setNavstate] = useState('freq');
  // freq, onHand

  const onNavClick = () => {
    if (navstate === 'freq') {
      // API GET : 자주 먹었어요!
      setNavstate('onHand');
    } else {
      setNavstate('freq');
    }
  };

  return (
    <>
      <PageBackground>
        <NavWrapper>
          <NavItem onClick={onNavClick} navstate={navstate} navkey="freq">
            자주 먹었어요!
          </NavItem>
          <NavItem onClick={onNavClick} navstate={navstate} navkey="onHand">
            직접 등록해요!
          </NavItem>
        </NavWrapper>
        <ItemsWrapper></ItemsWrapper>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  width: 90rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavWrapper = styled.div`
  width: 15.875rem;
  height: 2.5rem;
  flex-shrink: 0;
  margin: 1.1rem;

  display: flex;
  flex-direction: row;
`;

const NavItem = styled.div`
  width: 8.125rem;
  height: 2.5rem;

  cursor: pointer;

  border-radius: 1.875rem;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  ${props =>
    props.navstate === props.navkey
      ? // 현재 state가 해당 버튼이 눌린 상태라면
        css`
          background: #111111;
          color: white;
        `
      : css`
          background: transparent;
          color: #707070;
        `};
  // 여기 좀 잘한듯 메모
`;

const ItemsWrapper = styled.div`
  width: 47.625rem;
  height: 27rem;
  flex-shrink: 0;

  border: 1px solid black;
`;

export default FoodNavigationSection;
