import React from 'react';
import styled from 'styled-components';

// active: hover 이벤트로 툴팁이 활성화된 상황
// payload: tooltip에 띄울 정보를 props로 받음

const MainBSTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const date = new Date(payload[0].payload.recorddate);
    // console.log(payload[0].payload.bloodsugar); //혈당
    // console.log(payload[0].payload.recorddate); //날짜
    return (
      <CustomToolTip>
        <DateText>
          {date.getFullYear()} . {date.getMonth() + 1} . {date.getDate()}
        </DateText>
        <BSText>혈당값 : {payload[0].payload.bloodsugar}</BSText>
        <MealWrapper>
          오늘의 식단
          {payload[0].payload.foodnames.map(foodname => (
            <MealText className="desc">{foodname}</MealText>
          ))}
        </MealWrapper>
      </CustomToolTip>
    );
  }

  return null;
};

const CustomToolTip = styled.div`
  background-color: #f0f1f5;
  padding: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  line-height: 1rem;
`;

const DateText = styled.div`
  font-style: italic;
  font-size: 0.85rem;
`;

const BSText = styled.div`
  font-weight: bold;
`;

const MealWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MealText = styled.div`
  color: #111111;

  font-size: 12px;
  font-weight: 500;

  line-height: 1rem;
  text-align: center;
`;

export default MainBSTooltip;
