import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';

// 예시 데이터 생성 (여러 날짜에 걸쳐 데이터가 존재한다고 가정)
const generateData = () => {
  const data = [];
  const now = new Date();
  for (let i = 0; i < 100; i++) {
    const date = new Date(now.getTime() - i * 60000);
    data.push({
      time: date.toISOString().substring(0, 16),
      value: Math.floor(Math.random() * 100),
    });
  }
  return data;
};

const allData = generateData();

const filterDataByDate = (data, date) => {
  return data.filter(d => d.time.startsWith(date.toISOString().substring(0, 10)));
};

const MainBloodSugarChart = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState(filterDataByDate(allData, currentDate));

  const changeDate = days => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);
    setCurrentDate(newDate);
    setFilteredData(filterDataByDate(allData, newDate));
  };

  const options = {
    chart: {
      type: 'line',
      scrollablePlotArea: {
        scrollPositionX: 1,
        maxWidth: '300',
      },
      height: '250',
    },
    title: {
      text: 'My chart',
    },
    xAxis: {
      type: 'category',
      categories: filteredData.map(d => d.time.substring(11, 16)), // HH:MM 형식
      title: {
        text: 'Time (HH:MM)',
      },
    },
    yAxis: {
      title: {
        text: 'Value',
      },
    },
    series: [
      {
        name: 'Value',
        data: filteredData.map(d => d.value),
      },
    ],
    tooltip: {
      formatter: function () {
        return `Time: ${this.x}<br/>Value: ${this.y}<br/>Additional Info: More details here.`;
      },
    },
  };

  return (
    <StyledGraphWrapper>
      <HighchartsReact highcharts={Highcharts} options={options} />
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

const StyledDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export default MainBloodSugarChart;
