import { React, useEffect } from 'react';
import styled, { css } from 'styled-components';
import LogoButton from '../../common/components/LogoButton';
import mainperson1 from '../assets/Section1_1/MainPerson1.png';
import mainperson2 from '../assets/Section1_1/MainPerson2.png';
import gsap from 'gsap';
import Vec1 from '../assets/background/backVector1.png';
import Mac1 from '../assets/Section1_1/Mac1.png';
import Mac2 from '../assets/Section1_1/Mac2.png';
import Logo from '../assets/Section1_1/Logo.png';
import BookIcon from '../assets/Section1_2/Book.svg?react';
import GraphIcon from '../assets/Section1_2/Graph.svg?react';

const Section1 = () => {
  useEffect(() => {
    gsap.fromTo('.person1', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 });
    gsap.fromTo('.person2', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.8 });
    gsap.fromTo('.graph', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.5 });
    gsap.fromTo('.book', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.8 });
  }, []);

  return (
    <Wrapper>
      {/* 배경의 absolute 벡터 */}
      <BGVector src={Vec1}></BGVector>
      {/* 200vh sdf*/}
      <ContentWrapper>
        {/* 100vh */}
        <MainContent1>
          <MainHeader>
            <LogoButton></LogoButton>
          </MainHeader>
          <Content1_1Wrap>
            <MacWrap>
              <MacImg1 src={Mac1}></MacImg1>
              <MacImg2 src={Mac2}></MacImg2>
            </MacWrap>
            <MainWrap>
              <MainText>혈당 스파이크를 방지할 작은 시작,</MainText>
              <LogoWrap src={Logo} />
            </MainWrap>
          </Content1_1Wrap>
          <Content1_2Wrap>
            <Person1 className="person1">
              <PersonImg src={mainperson1}></PersonImg>
              <PersonContent direction="left">
                제 <PersonSpan>혈당 변화를 한눈에</PersonSpan> 볼 수 있고, 상황이 여의치 않을 경우 식단 정보를 바탕으로
                한 <PersonSpan>예상 혈당</PersonSpan>을 제공받을 수 있는 플랫폼이 있으면 좋겠어요.
              </PersonContent>
            </Person1>
            <Person2 className="person2">
              <PersonContent direction="right">
                잊어버리지 않게 지난번에 <PersonSpan>먹은 음식이 기록</PersonSpan>되고, 음식과 혈당의 관계를 분석해서{' '}
                <PersonSpan>효율적이고 건강하게 혈당을 관리</PersonSpan>하고 싶어요.
              </PersonContent>
              <PersonImg src={mainperson2}></PersonImg>
            </Person2>
          </Content1_2Wrap>
          <Footer>
            DON’T 스파이크는 당뇨병 환자들을 위한 맞춤형 정보제공 및 데이터 시각화를 통해 올바른 당뇨 관리를 돕는 서비스
            입니다.
          </Footer>
        </MainContent1>

        {/* 100vh */}
        <MainContent2>
          <Content2_Wrap>
            <Content2_1Wrap>
              <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>주기적인 혈당 체크가 필요한 당신에게,</div>
              <div style={{ fontSize: '1rem', fontWeight: '500', color: '#5975FA' }}>
                혈당 기록을 간편하게, 데이터는 한눈에
              </div>
            </Content2_1Wrap>
            <Content2_2Wrap>
              <GraphWrap className="graph">
                <GraphIcon></GraphIcon>
                <div style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111111' }}>일별 / 월별 혈당 그래프</div>
                <div
                  style={{
                    width: '18rem',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    color: '#707070',
                    textAlign: 'center',
                    lineHeight: '1rem',
                  }}
                >
                  매일 입력된 혈당 수치를 기반으로 <br></br>그래프 시각화와 예상 혈당 수치를 알려드릴게요.
                </div>
              </GraphWrap>
              <BookWrap className="book">
                <BookIcon></BookIcon>
                <div style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111111' }}>혈당 백과</div>
                <div
                  style={{
                    width: '12rem',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    color: '#707070',
                    textAlign: 'center',
                    lineHeight: '1rem',
                  }}
                >
                  궁금한 음식을 검색해보세요! <br></br>다양한 영양 정보와 함께 섭취 팁도 함께 제공됩니다.
                </div>
              </BookWrap>
            </Content2_2Wrap>
          </Content2_Wrap>
        </MainContent2>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%; // 200vh를 차지

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
`;

const BGVector = styled.img`
  width: 100%;
  position: absolute; // Wrapper에 대해 절대적인 위치로 설정
  top: 5%;
  z-index: 0; // 가장 하위에 위치하도록
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;

  z-index: 1; // 배경보다 상위에 위치하도록
`;

const MainHeader = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  background: transparent;

  /* // 헤더의 border */
  border-bottom: 1px solid #cfcfcf;
  background: rgba(255, 255, 255, 0.2);
`;

// Section1의 첫번째 100vh
const MainContent1 = styled.div`
  height: 100vh;
`;

const Content1_1Wrap = styled.div`
  height: 70vh;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Content1_2Wrap = styled.div`
  height: 15vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
`;

const Footer = styled.footer`
  width: 100%;
  height: 5vh;
  color: #707070;

  font-size: 0.8rem;
  font-weight: 500;
  vertical-align: bottom;
  line-height: 5vh;

  text-align: center;
`;

// 1_1 서브 요소

const MacWrap = styled.div`
  position: relative;

  width: 50rem;
  height: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MacImg1 = styled.img`
  width: 23.8715rem;
  height: 14.92388rem;
  flex-shrink: 0;

  position: absolute;
  top: 30%;
  left: 35%;

  z-index: 3;
`;

const MacImg2 = styled.img`
  width: 23.8715rem;
  height: 14.92388rem;
  flex-shrink: 0;

  position: absolute;
  top: 10%;
  left: 15%;

  z-index: 2;
`;

const MainWrap = styled.div`
  width: 40rem;
  height: 20rem;
  padding: 5rem 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const MainText = styled.div`
  color: #414141;
  font-size: 1.5rem;
  font-weight: 600;
`;

const LogoWrap = styled.img`
  width: 24.5rem;
  height: 5.22444rem;
`;

const Person1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Person2 = styled.div`
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

// Section2의 두번째 100vh
const MainContent2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content2_Wrap = styled.div`
  width: 53.75rem;
  height: 36.25rem;
  flex-shrink: 0;

  border-radius: 0.625rem;
  background-color: rgba(255, 255, 255, 0.4);

  display: flex;
  flex-direction: column;
`;

// 2 서브 요소
const Content2_1Wrap = styled.div`
  width: 100%;
  height: 30%;

  vertical-align: middle;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const Content2_2Wrap = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
`;
const GraphWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const BookWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export default Section1;
