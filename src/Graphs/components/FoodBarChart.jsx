// BarChartComponent.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '밥', pv: 2400, amt: 2400 },
  { name: '사과', pv: 1398, amt: 2210 },
  { name: '낙지볶음', pv: 9800, amt: 2290 },
  { name: '김치찜', pv: 3908, amt: 2000 },
  { name: 'Page E', pv: 4800, amt: 2181 },
  { name: 'Page F', pv: 3800, amt: 2500 },
  { name: 'Page G', pv: 4300, amt: 2100 },
  // 더 많은 데이터 포인트를 추가하세요
];

const FoodBarChart = () => {
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <div style={{ width: '1200px', height: '270px', margin: '0 auto' }}>
        <BarChart
          width={1200}
          height={270}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap="30%" // 바 간의 간격 조절
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default FoodBarChart;
