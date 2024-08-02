import React from 'react';
import { styled, css } from 'styled-components';
import ExpectTooltip from '../assets/ExpectTooltip.svg?react';
import MainTooltip from '../assets/MainToolTip.svg?react';

// active: hover 이벤트로 툴팁이 활성화된 상황
// payload: tooltip에 띄울 정보를 props로 받음

const MainBSTooltip = ({ active, payload, label }) => {
  // 예상 혈당값이 있을 때 먼저 처리
  if (active && payload && payload[0].payload.expect > 0 && !payload[0].payload.bloodsugar) {
    return (
      <ExpectToolTipWrapper>
        <Container>
          {' '}
          <ExpectTooltip></ExpectTooltip>
          <BSText>{payload[0].payload.expect}</BSText>
        </Container>
      </ExpectToolTipWrapper>
    );
  } else if (active && payload) {
    const data = payload[0].payload;

    return (
      <ToolTipWrapper>
        <MainTooltip></MainTooltip>
        <DateText>{data.tooltipDate}</DateText>
        <MealWrapper>
          {/* 식단 데이터가 있을 때에만 map하도록 */}
          {payload[0].payload.foodBsMappingId.length != 0 ? (
            data.foodBsMappingId.map(item => <MealText key={data.item}>{item}</MealText>)
          ) : (
            <></>
          )}
        </MealWrapper>
        <BSText bloodsugar={data.bloodsugar}>{data.bloodsugar}</BSText>
      </ToolTipWrapper>
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

const MealWrapper = styled.div`
  width: 5.4rem;
  height: 5.8375rem;

  position: absolute;
  top: 40%;
  left: 28%;

  padding: 0.3rem;

  overflow: scroll;
`;

const Container = styled.div`
  position: absolute;
  top: -25%;
  left: -10%;

  overflow: scroll;
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

  position: absolute;
  top: 11%;
  left: 30%;
`;

const MealText = styled.div`
  color: #111111;

  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.05rem;
`;

export default MainBSTooltip;
