import React from 'react';
import styled from 'styled-components';

// active: hover 이벤트로 툴팁이 활성화된 상황
// payload: tooltip에 띄울 정보를 props로 받음

const MainBSTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const amt = payload[0].payload.meal;
    return (
      <CustomToolTip>
        <Text className="desc">{`${amt}`}</Text>
      </CustomToolTip>
    );
  }

  return null;
};

const CustomToolTip = styled.div`
  background-color: #f0f1f5;
  padding: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`;

const Text = styled.div`
  color: #111111;

  font-size: 12px;
  font-weight: 500;
`;

export default MainBSTooltip;
