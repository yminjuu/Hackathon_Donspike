import { React, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Search from '../assets/imgs/search.png';
import Btn from '../assets/NavBtn.svg?react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger Trigger 호출

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  background-color: transparent;
`;

const Icon = styled.img`
  width: 4.0625rem;
  height: 4.625rem;
  flex-shrink: 0;
`;

const Text = styled.div`
  width: 18.75rem;
  height: 1.25rem;
  flex-shrink: 0;

  color: #111111;

  font-size: 1.375rem;
  font-weight: 600;
`;

const ImgBtn = styled.div`
  width: 21.875rem;
  height: 5rem;
  flex-shrink: 0;
  cursor: pointer;
`;

const Section4 = () => {
  const wrapperRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 100%',
        end: 'bottom 60%',
        toggleActions: 'play none restart none',
      },
    });

    tl.from(wrapperRef.current, { opacity: 0, y: +100, duration: 1.3 });
  }, []);

  return (
    <Wrapper>
      <MainWrapper ref={wrapperRef}>
        <Icon src={Search}></Icon>
        <Text>혈당 스파이크를 방지할 작은 시작,</Text>
        <ImgBtn
          onClick={() => {
            navigate('/main');
          }}
        >
          <Btn></Btn>
        </ImgBtn>
      </MainWrapper>
    </Wrapper>
  );
};

export default Section4;
