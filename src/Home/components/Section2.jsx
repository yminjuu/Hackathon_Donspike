import { React, useRef, useEffect } from 'react';
import styled from 'styled-components';
import pencil from '../assets/Section2/pencil.png';
import { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Content1 from '../assets/Section2/2_1.png';
import Content2 from '../assets/Section2/2_2.png';
import Content3 from '../assets/Section2/2_3.png';
import Icon1 from '../assets/Section2/Icon1.svg?react';
import Icon2 from '../assets/Section2/Icon2.svg?react';
import Icon3 from '../assets/Section2/Icon3.svg?react';

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger Trigger 호출

const Wrapper = styled.div`
  width: 100%;
  height: 100%; // 100vh를 차지
`;

const PageHeader = styled.div`
  width: 100%;
  height: 15vh;
  flex-shrink: 0;

  border-top: 10rem;
  background: #fff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ContentWrapper = styled.div`
  height: 85vh;
  width: 100%;
`;

const RealContentWrapper = styled.div`
  margin: 0rem 8rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 1.6rem;
`;

const Content1Wrap = styled.div`
  border-radius: 1.875rem;
  background-color: #f0f1f5;
  height: 47%;
  padding: 0 3rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Content2and3Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.75rem;

  height: 53%;
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

// Content1의 Wrapper
const ContentSubWrapper1_1 = styled.img`
  width: 30rem;
  height: 16rem;
  flex-shrink: 0;
  object-fit: cover;

  border-radius: 1.25rem;
`;

const ContentSubWrapper1_2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  gap: 1rem;

  padding: 2.5rem;
`;

const ContentSubText = styled.div`
  color: #111111;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5rem;
`;

const ContentSubSubText = styled.div`
  color: #707070;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.1rem;
`;

// 2번째 컨텐츠 시작
const Content2Wrap = styled.div`
  border-radius: 1.875rem;
  background-color: #f0f1f5;

  width: 100%;
  padding-top: 1rem;
`;

const ContentSubWrapper2_1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  gap: 0.5rem;
  padding: 0 2rem;
`;

const ContentSubWrapper2_3 = styled.img`
  width: 16rem;
  height: 14.375rem;
  flex-shrink: 0;
  object-fit: cover;

  border-radius: 1.25rem;
`;

const ImgWrapper2_2 = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content3Wrap = styled.div`
  border-radius: 1.875rem;
  background-color: #f0f1f5;

  width: 100%;
  padding-top: 1rem;
`;

const ContentSubWrapper3_2 = styled.img`
  width: 29rem;
  height: 14.375rem;
  flex-shrink: 0;
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

    tl.from(wrapper1Ref.current, { opacity: 0, y: -50, duration: 0.5 })
      .from(wrapper2Ref.current, { opacity: 0, y: -50, duration: 0.5 }, '+=0.01')
      .from(wrapper3Ref.current, { opacity: 0, y: -50, duration: 0.5 }, '+=0.01');
  }, []);

  return (
    <Wrapper>
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
        <RealContentWrapper>
          <Content1Wrap ref={wrapper1Ref}>
            <ContentSubWrapper1_1 src={Content1}></ContentSubWrapper1_1>
            <ContentSubWrapper1_2>
              <Icon1></Icon1>
              <ContentSubText>
                혈당과 식단을 날짜별로 기록해주시면
                <br /> 한눈에 그래프로 보여드릴게요.
              </ContentSubText>
              <ContentSubSubText>
                기록해주신 혈당 수치를 기반으로 <br />
                다음 날의 예상 혈당을 확인 할 수 있어요.
              </ContentSubSubText>
            </ContentSubWrapper1_2>
          </Content1Wrap>
          <Content2and3Wrap>
            <Content2Wrap ref={wrapper2Ref}>
              <ContentSubWrapper2_1>
                <Icon2></Icon2>
                <ContentSubText>
                  매일매일 측정한 혈당을 <br></br>그래프에 추가할 수 있어요.
                </ContentSubText>
              </ContentSubWrapper2_1>
              <ImgWrapper2_2>
                <ContentSubWrapper2_3 src={Content2}></ContentSubWrapper2_3>
              </ImgWrapper2_2>
            </Content2Wrap>
            <Content3Wrap ref={wrapper3Ref}>
              <ContentSubWrapper2_1>
                <Icon3></Icon3>
                <ContentSubText>
                  월별 혈당 평균 그래프를 비교해서 <br></br>혈당 관리 방향을 제시해 드릴게요.
                </ContentSubText>
              </ContentSubWrapper2_1>
              <ImgWrapper2_2>
                <ContentSubWrapper3_2 src={Content3}></ContentSubWrapper3_2>
              </ImgWrapper2_2>
            </Content3Wrap>
          </Content2and3Wrap>
        </RealContentWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Section2;
