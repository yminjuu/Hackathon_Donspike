import React from 'react';
import { styled, css } from 'styled-components';
import ExpectTooltip from '../imgs/ExpectTooltip.svg?react';
import MainTooltip from '../imgs/MainToolTip.svg?react';

// active: hover 이벤트로 툴팁이 활성화된 상황
// payload: tooltip에 띄울 정보를 props로 받음

const MainBSTooltip = ({ active, payload, label }) => {
  if (active && payload && payload[0].payload.foodnames.length != 0) {
    const data = payload[0].payload;
    const date = new Date(data.recorddate);
    return (
      <ToolTipWrapper>
        <MainTooltip></MainTooltip>
        <DateText>{data.recorddate}</DateText>
        <MealText></MealText>
        <BSText bloodsugar={data.bloodsugar}>{data.bloodsugar}</BSText>
      </ToolTipWrapper>
    );
  } else if (active && payload && payload[0].payload.expect > 0) {
    console.log('여기');
    return (
      <ExpectToolTipWrapper>
        <Container>
          {' '}
          <ExpectTooltip></ExpectTooltip>
          <BSText>{payload[0].payload.expect}</BSText>
        </Container>
      </ExpectToolTipWrapper>
    );
  }

  return null;
};

const ToolTipWrapper = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
`;

const ExpectToolTipWrapper = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
`;

const Container = styled.div`
  position: absolute;
  top: -25%;
  left: -10%;

  overflow: visible;
`;

const BSText = styled.div`
  position: absolute;
  color: #3053f9;

  font-size: 0.875rem;
  font-weight: 600;

  ${props =>
    props.bloodsugar > 0
      ? css`
          top: 25%;
          left: 60%;
        `
      : css`
          top: 40%;
          left: 60%;
        `}
`;

const DateText = styled.div`
  color: #707070;
  font-size: 0.75rem;
  font-weight: 500;
`;

const MealText = styled.div`
  color: #111111;

  font-size: 0.75rem;
  font-weight: 500;
`;

export default MainBSTooltip;
