import { React, useRef, useEffect } from 'react';
import styled from 'styled-components';
import pencil from '../assets/imgs/pencil.png';
import { css } from 'styled-components';
import Content1 from '../assets/SubContent1_1.svg?react';
import Content2 from '../assets/SubContent1_2.svg?react';
import Content3 from '../assets/SubContent1_3.svg?react';
import Arrow1 from '../assets/arrows/arrow1.svg?react';
import Arrow2 from '../assets/arrows/arrow2.svg?react';
import Arrow3 from '../assets/arrows/arrow3.svg?react';
import Arrow4 from '../assets/arrows/arrow4.svg?react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger Trigger 호출

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
  gap: 2rem;
`;

const ContentWrapper = styled.div`
  padding: 4rem 18rem 4rem 18rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
`;

const Icon = styled.img`
  width: 2.0625rem;
  height: 2.625rem;
  flex-shrink: 0;
`;

const TextDiv = styled.div`
  height: 1.5rem;
  flex-shrink: 0;
  color: #111111;
  ${props =>
    props.type === 'big'
      ? css`
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          font-size: 1rem;
          font-weight: 500;
        `};
`;

const Text = styled.span`
  color: #3053f9;
`;

const Wrapper1 = styled.div`
  box-sizing: content-box;
  width: 19.625rem;
  height: 17.6875rem;
  flex-shrink: 0;
  position: relative;
`;

const Wrapper2 = styled.div`
  box-sizing: content-box;
  width: 32.1875rem;
  height: 17.6875rem;
  flex-shrink: 0;
  position: relative;
`;

const Wrapper3 = styled.div`
  box-sizing: content-box;
  width: 29rem;
  height: 14.4375rem;
  flex-shrink: 0;
  position: relative;
`;

const ArrowWrapper1 = styled.div`
  position: absolute;
  top: -10%;
  left: -6%;
`;

const ArrowWrapper2 = styled.div`
  position: absolute;
  top: -8%;
  left: 57%;
`;

const ArrowWrapper3 = styled.div`
  position: absolute;
  top: 41.5%;
  left: 96%;
`;

const ArrowWrapper4 = styled.div`
  position: absolute;
  top: 94%;
  left: 90%;
`;

const ArrowDesc = styled.div`
  width: 12rem;
  height: 2.375rem;
  flex-shrink: 0;

  color: #414141;
  font-size: 0.875rem;
  font-weight: 400;
  word-break: keep-all;
`;

const ArrowDesc1 = styled(ArrowDesc)`
  position: absolute;
  top: -10%;
  left: -400%;
`;

const ArrowDesc2 = styled(ArrowDesc)`
  position: absolute;
  top: -50%;
  left: 120%;
`;

const ArrowDesc3 = styled(ArrowDesc)`
  position: absolute;
  top: -30%;
  left: 120%;
`;
const ArrowDesc4 = styled(ArrowDesc)`
  position: absolute;
  top: 70%;
  left: 110%;
`;

const Section2 = () => {
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
    <>
      <PageHeader>
        <Icon src={pencil}></Icon>
        <TextWrapper>
          <TextDiv type="big">
            아침 공복 <Text>혈당을 기록</Text>하고 매일 바뀌는 혈당 수치를 <Text>한눈에</Text> 보여드릴게요.
          </TextDiv>
          <TextDiv type="small">혈당수치와 함께 식단을 추가하시면 다음 날 예상 혈당 수치를 알려드릴게요.</TextDiv>
        </TextWrapper>
      </PageHeader>
      <ContentWrapper>
        <Wrapper1 ref={wrapper1Ref}>
          <Content1></Content1>
          <ArrowWrapper1>
            <Arrow1></Arrow1>
            <ArrowDesc1>매일매일 측정한 혈당을 기록하고 그래프에 추가할 수 있어요.</ArrowDesc1>
          </ArrowWrapper1>
        </Wrapper1>
        <Wrapper2 ref={wrapper2Ref}>
          <Content2></Content2>
          <ArrowWrapper2>
            <Arrow2></Arrow2>
            <ArrowDesc2>혈당과 식단을 날짜별로 기록해주시면 한눈에 그래프로 보여드릴게요.</ArrowDesc2>
          </ArrowWrapper2>
          <ArrowWrapper3>
            <Arrow3></Arrow3>
            <ArrowDesc3>기록해주신 혈당 수치를 기반으로 다음 날의 예상 혈당을 확인 할 수 있어요.</ArrowDesc3>
          </ArrowWrapper3>
        </Wrapper2>
        <Wrapper3 ref={wrapper3Ref}>
          <Content3></Content3>
          <ArrowWrapper4>
            <Arrow4></Arrow4>
            <ArrowDesc4>월별 혈당 평균 그래프를 비교해서 혈당 관리 팁을 제공해드릴게요.</ArrowDesc4>
          </ArrowWrapper4>
        </Wrapper3>
      </ContentWrapper>
    </>
  );
};

export default Section2;
