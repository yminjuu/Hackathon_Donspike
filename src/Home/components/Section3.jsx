import { React, useRef, useEffect } from 'react';
import styled from 'styled-components';
import buritto from '../assets/buritto.png';
import { css } from 'styled-components';
import Content1 from '../assets/SubContent2_1.svg?react';
import Content2 from '../assets/SubContent2_2.svg?react';
import Content3 from '../assets/SubContent2_3.svg?react';
import Arrow from '../assets/arrow3.svg?react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger Trigger 호출

const Wrapper = styled.div`
  width: 100%;
  height: 100%; // 100vh를 차지
`;

const PageHeader = styled.div`
  width: 100%;
  height: 7rem;
  flex-shrink: 0;

  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-top: 10rem;
  background: #fff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ContentWrapper = styled.div`
  padding: 1.5rem 28rem 4rem 28rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.5rem;
`;

const Icon = styled.img`
  width: 4.0625rem;
  height: 4.625rem;
  flex-shrink: 0;
`;

const TextDiv = styled.div`
  height: 1.5rem;
  flex-shrink: 0;
  color: #111111;
  ${props =>
    props.type === 'big'
      ? css`
          font-size: 1.3rem;
          font-weight: 700;
        `
      : css`
          font-size: 0.8rem;
          font-weight: 500;
        `};
`;

const Wrapper1 = styled.div`
  box-sizing: content-box;
  width: 35.4375rem;
  height: 10.34375rem;
  flex-shrink: 0;
  position: relative;
`;

const Wrapper2 = styled.div`
  box-sizing: content-box;
  width: 22.9375rem;
  height: 13.9375rem;
  flex-shrink: 0;
  position: relative;
`;

const Wrapper3 = styled.div`
  box-sizing: content-box;
  width: 26.90625rem;
  height: 11.9375rem;
  flex-shrink: 0;
  position: relative;
`;

const ArrowWrapper1 = styled.div`
  position: absolute;
  top: 55%;
  left: 95%;
`;

const ArrowWrapper2 = styled.div`
  position: absolute;
  top: 55%;
  left: 95%;
`;

const ArrowWrapper3 = styled.div`
  position: absolute;
  top: 55%;
  left: 95%;
`;

const ArrowDesc = styled.div`
  width: 15rem;
  height: 2.375rem;
  flex-shrink: 0;

  color: #414141;
  font-size: 0.875rem;
  font-weight: 400;
  word-break: keep-all;
  line-height: 1.2rem;
`;

const ArrowDesc1 = styled(ArrowDesc)`
  position: absolute;
  top: 0%;
  left: 130%;
`;

const ArrowDesc2 = styled(ArrowDesc)`
  position: absolute;
  top: -50%;
  left: 120%;
`;

const ArrowDesc3 = styled(ArrowDesc)`
  width: 20rem;
  position: absolute;
  top: -50%;
  left: 20%;
`;

const ArrowDesc4 = styled(ArrowDesc)`
  width: 20rem;
  position: absolute;
  top: -10%;
  left: 10%;
`;

const BigText = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const TextWrap = styled.div`
  width: 16.5625rem;
  height: 4.125rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Section3 = () => {
  const wrapper1Ref = useRef(null);
  const wrapper2Ref = useRef(null);
  const wrapper3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper1Ref.current,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none restart none',
      },
    });

    tl.from(wrapper1Ref.current, { opacity: 0, y: -50, duration: 0.8 })
      .from(wrapper2Ref.current, { opacity: 0, y: -50, duration: 0.8 }, '+=0.01')
      .from(wrapper3Ref.current, { opacity: 0, y: -50, duration: 0.8 }, '+=0.01');
  }, []);

  return (
    <Wrapper>
      <PageHeader>
        <Icon src={buritto}></Icon>
        <TextWrapper>
          <TextDiv type="big">날짜별 먹은 음식을 기록하고 식단을 건강하게 관리 해보세요</TextDiv>
          <TextDiv type="small">‘혈당 백과’ 에서는 음식의 영양소와 섭취 팁을 확인할 수 있어요.</TextDiv>
        </TextWrapper>
      </PageHeader>
      <ContentWrapper>
        <Wrapper1 ref={wrapper1Ref}>
          <Content1></Content1>
          <ArrowWrapper1>
            <Arrow></Arrow>
            <ArrowDesc1>
              메뉴를 검색하거나 등록할 수 있어요. <br></br> <BigText>날짜별 식단을 추가</BigText>해주세요
            </ArrowDesc1>
          </ArrowWrapper1>
        </Wrapper1>
        <Wrapper2 ref={wrapper2Ref}>
          <Content2></Content2>
          <ArrowWrapper2>
            <Arrow></Arrow>
            <ArrowDesc2>
              추가해둔 식단을 바탕으로 월별 가장 자주 먹은 음식을 알려드릴게요.
              <br /> 식단 관리 시 참고하세요!
            </ArrowDesc2>
          </ArrowWrapper2>
        </Wrapper2>
        <Wrapper3 ref={wrapper3Ref}>
          <Content3></Content3>
          <ArrowWrapper3>
            <Arrow></Arrow>
            <ArrowWrapper3>
              <TextWrap>
                <ArrowDesc3>특정 음식과 혈당의 상관관계가 궁금하신가요?</ArrowDesc3>
                <ArrowDesc4>
                  혈당 백과에 궁금한 음식을 검색해주시면 혈당관리에 도움이 되는 정보들을 알려드릴게요.
                </ArrowDesc4>
              </TextWrap>
            </ArrowWrapper3>
          </ArrowWrapper3>
        </Wrapper3>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Section3;
