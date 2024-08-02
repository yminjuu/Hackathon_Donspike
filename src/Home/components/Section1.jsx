import React from 'react';
import styled, { css } from 'styled-components';
import LogoButton from '../../common/components/LogoButton';
import MainContent from '../assets/MainContent.svg?react';
import mainperson1 from '../assets/MainPerson1.png';
import mainperson2 from '../assets/MainPerson2.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger Trigger 호출
const Section1 = () => {
  return (
    <Wrapper>
      <MainHeader>
        <LogoButton></LogoButton>
        <div>로그인?</div>
      </MainHeader>
      <MainContent1>
        <MainContent></MainContent>
      </MainContent1>
      <MainContent2>
        <Person1>
          <PersonImg src={mainperson1}></PersonImg>
          <PersonContent direction="left">
            제 <PersonSpan>혈당 변화를 한눈에</PersonSpan> 볼 수 있고, 상황이 여의치 않을 경우 식단 정보를 바탕으로 한{' '}
            <PersonSpan>예상 혈당</PersonSpan>을 제공받을 수 있는 플랫폼이 있으면 좋겠어요.
          </PersonContent>
        </Person1>
        <Person2>
          <PersonContent direction="right">
            잊어버리지 않게 지난번에 <PersonSpan>먹은 음식이 기록</PersonSpan>되고, 음식과 혈당의 관계를 분석해서{' '}
            <PersonSpan>효율적이고 건강하게 혈당을 관리</PersonSpan>하고 싶어요.
          </PersonContent>
          <PersonImg src={mainperson2}></PersonImg>
        </Person2>
      </MainContent2>
      <Footer>
        DON’T 스파이크는 당뇨병 환자들을 위한 맞춤형 정보제공 및 데이터 시각화를 통해 올바른 당뇨 관리를 돕는 서비스
        입니다.
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MainHeader = styled.div`
  width: 100%;
  height: 8%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  background: transparent;

  /* // 헤더의 border */
  border-bottom: 1px solid #cfcfcf;
  background: rgba(255, 255, 255, 0.2);
`;

const MainContent1 = styled.div`
  margin: 8rem 20rem 6rem 20rem;
`;

const MainContent2 = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Person1 = styled.div`
  margin-right: 30rem;

  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Person2 = styled.div`
  margin-left: 30rem;

  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const PersonImg = styled.img`
  width: 4.8rem;
  height: 7.6rem;
  flex-shrink: 0;
`;

const PersonContent = styled.div`
  width: 28rem;
  height: 2.8rem;
  flex-shrink: 0;
  padding: 1.75rem;
  text-align: center;
  vertical-align: middle;

  background-color: #ffffff;
  ${props =>
    props.direction === 'left'
      ? css`
          border-radius: 3.75rem 3.75rem 3.75rem 0rem;
        `
      : css`
          border-radius: 3.75rem 3.75rem 0rem 3.75rem;
        `}
  box-shadow: 2px 4px 10px 2px #e8e8e8;

  color: #111111;
  font-size: 0.9rem;
  font-weight: 450;
  word-spacing: 0.05rem;
  word-break: keep-all;
  line-height: 1.2rem;
`;

const PersonSpan = styled.span`
  color: #3053f9;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 0.2rem 0;
  color: #707070;
  font-size: 0.8rem;
  font-weight: 500;

  text-align: center;
`;

export default Section1;
