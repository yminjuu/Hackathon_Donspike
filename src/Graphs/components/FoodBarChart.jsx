// BarChartComponent.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import CustomBarShape from '../FoodBar/CustomBarShape';

const data = [
  { name: '밥', count: 10 },
  { name: '사과', count: 8 },
  { name: '낙지볶음', count: 7 },
  { name: '김치찜', count: 6 },
  { name: '샐러드', count: 6 },
  { name: '포케', count: 3 },
  { name: '명란오두비', count: 1 },
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
          <XAxis dataKey="name" interval={0} tick={{ fontSize: 13 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#3053F9" shape={<CustomBarShape />} />
        </BarChart>
      </div>
    </div>
  );
};

export default FoodBarChart;
