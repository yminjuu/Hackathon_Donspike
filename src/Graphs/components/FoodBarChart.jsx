// BarChartComponent.jsx
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, LabelList } from 'recharts';
import CustomBarShape from '../FoodBar/CustomBarShape';
import CustomLabel from '../FoodBar/CustomLabel';
import '../styles/CustomScroll.css';
import axios from 'axios';

const compare = (a, b) => {
  return parseInt(b.count) - parseInt(a.count);
};

const FoodBarChart = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [favData, setFavData] = useState();

  const fetchFavFoodData = async () => {
    try {
      // 현재 7월값으로 요청하고 있음
      const res = await axios.get(`${BASE_URL}/api/food/favorites`);
      setFavData(res.data.sort(compare));
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
          data={favData}
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
            dataKey="foodName"
            interval={0}
            tick={{ fontSize: 13 }}
            count={length}
            padding={{ left: 20, right: 20 }}
          />
          <Bar
            dataKey="count"
            fill="#3053F9"
            shape={props => <CustomBarShape {...props} totalCount={favData.length} />}
          >
            {' '}
            <LabelList dataKey="count" content={CustomLabel} />
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default FoodBarChart;
