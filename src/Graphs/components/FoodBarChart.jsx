// BarChartComponent.jsx
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, LabelList } from 'recharts';
import CustomBarShape from '../FoodBar/CustomBarShape';
import CustomLabel from '../FoodBar/CustomLabel';
import '../styles/CustomScroll.css';
import axios from 'axios';

// count에 따라 내림차순으로 받은 데이터 정렬 필요
const data = [
  { foodname: '밥', count: 10, food_id: 1 },
  { foodname: '사과', count: 8, food_id: 2 },
  { foodname: '낙지볶음', count: 7, food_id: 3 },
  { foodname: '김치찜', count: 6, food_id: 4 },
  { foodname: '샐러드', count: 6, food_id: 5 },
];

const FoodBarChart = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const user_id = 1;

  const [favData, setFavData] = useState();

  const totalCount = data.length;

  const fetchFavFoodData = async () => {
    try {
      // 현재 7월값으로 요청하고 있음
      const res = await axios.get(`${BASE_URL}/api/food/favorites?month=2024-08`);
      console.log('foodbar chart GET: ', res);
      // 받아온 데이터 state에 반영 아직 안 함
      // foodname, food_id, count 받을 예정
      // setFavData(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // 최초 렌더링시 데이터 가져옴
  useEffect(() => {
    fetchFavFoodData();
  }, []);

  return (
    <div style={{ width: '100%', overflowX: 'hidden', overflowY: 'hidden' }} className="custom-scroll">
      <div style={{ width: '100%', height: '270px', margin: '0 auto' }}>
        <BarChart
          width={600}
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
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="name"
            interval={0}
            tick={{ fontSize: 13 }}
            count={length}
            padding={{ left: 20, right: 20 }}
          />
          <Bar dataKey="count" fill="#3053F9" shape={props => <CustomBarShape {...props} totalCount={totalCount} />}>
            {' '}
            <LabelList dataKey="count" content={CustomLabel} />
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default FoodBarChart;
