import React, { useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MainBloodSugarChart = () => {
  const myMealItems = ['쌀밥', '갓김치', '제육볶음', '두바이초콜릿'];

  // 툴팁 콜백 함수
  const footer = tooltipItems => {
    var myMealString = '';
    myMealItems.forEach(myMealItem => {
      myMealString += myMealItem + '\n';
    });
    console.log(myMealString);
    return myMealString;
  };

  // 더미 x축 데이터
  const labels = ['7/11', '7/12', '7/13', '7/14', '7/15', '7/16', '7/17', '7/18', '7/19', '7/20'];

  // 데이터
  const data = {
    labels,
    datasets: [
      {
        data: [85, 130, 110, 90, 93, 95, 90, 103, 105, 108],
        backgroundColor: '#414141',
        borderColor: '#414141',
      },
    ],
  };

  // 그래프 옵션
  const options = {
    responsive: false,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        min: 0,
        max: 7,
        grid: {
          display: false,
        },
      },
      y: {
        position: 'right',
      },
    },
    plugins: {
      tooltip: {
        position: 'average',
        callbacks: {
          footer: footer,
        },
      },
    },
    elements: {
      line: {
        fill: false,
        backgroundColor: '#414141',
        borderColor: '#414141',
        // line에 대해선 hover 안 먹히고 있음.
        hoverBackgroundColor: '#3053F9',
        hoverBorderColor: '#3053F9',
      },
      point: {
        backgroundColor: '#414141',
        hoverBackgroundColor: '#3053F9',
        hoverBorderColor: '#3053F9',
      },
    },
  };

  return (
    <StyledGraphWrapper>
      <GraphContainer>
        <Line options={options} data={data} width="auto" height="auto" />
      </GraphContainer>
    </StyledGraphWrapper>
  );
};

const StyledGraphWrapper = styled.div`
  width: 100%;
  height: 25.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0; // 낮은 z-index 설정하여 sticky 헤더 가리지 않도록
  margin-bottom: 1rem;
`;

const GraphContainer = styled.div`
  width: 48.625rem;
  height: 17.19669rem;
  flex-shrink: 0;
`;
export default MainBloodSugarChart;
