// LineChartComponent.jsx
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import MainBSToolTip from '../MainBS/MainBSToolTip';
import CustomizedLabel from '../MainBS/CustomizedLabel';
import '../styles/CustomScroll.css';
import axios from 'axios';

// 더미데이터
const data = [
  {
    recorddate: '2024-06-17T17:00:00.123456+09:00',
    bloodsugar: 150.0,
    foodnames: ['사과', '배'],
  },
  {
    recorddate: '2024-06-18T17:00:00.123456+09:00',
    bloodsugar: 140.0,
    foodnames: ['사과', '배'],
  },
  {
    recorddate: '2024-06-19T17:00:00.123456+09:00',
    bloodsugar: 130.0,
    foodnames: ['사과', '배'],
  },
  {
    recorddate: '2024-06-20T17:00:00.123456+09:00',
    bloodsugar: 120.0,
    foodnames: ['사과', '배'],
  },
  {
    recorddate: '2024-06-21T17:00:00.123456+09:00',
    bloodsugar: 110.0,
    foodnames: ['사과', '배'],
  },
  {
    recorddate: '2024-06-22T17:00:00.123456+09:00',
    bloodsugar: 100.0,
    foodnames: ['사과', '배'],
  },
  {
    recorddate: '2024-06-23T17:00:00.123456+09:00',
    bloodsugar: 150.0,
    foodnames: ['사과', '배'],
  },
  {
    recorddate: '2024-06-24T17:00:00.123456+09:00',
    bloodsugar: 130.0,
    foodnames: ['사과', '배', '사과', '배', '사과', '배', '사과', '배', '사과', '배'],
    expect: 130.0, // 전날 혈당값과 이어주기 위해서 존재
  },
  {
    recorddate: '2024-07-31T17:00:00.123456+09:00',
    expect: 140.0,
    foodnames: [],
  },
];

const formatDate = dateString => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();
  return `${year}.${month}.${day}`;
};

const CustomizedDot = props => {
  const { cx, cy, stroke, payload, value } = props;
  const date = new Date();
  const indexDate = new Date(payload.recorddate);

  if (
    date.getFullYear() === indexDate.getFullYear() &&
    date.getMonth() === indexDate.getMonth() &&
    date.getDate() === indexDate.getDate()
  ) {
    return <circle cx={cx} cy={cy} r={5} stroke={stroke} strokeWidth={1} fill="#D6DDFE" />;
  } else return <></>;
};

const MainBloodSugarChart = () => {
  const user_id = 1;

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [data, setData] = useState([
    {
      recorddate: '2024-06-17T17:00:00.123456+09:00',
      bloodsugar: 150.0,
      foodnames: ['사과', '배'],
    },
    {
      recorddate: '2024-06-18T17:00:00.123456+09:00',
      bloodsugar: 140.0,
      foodnames: ['사과', '배'],
    },
    {
      recorddate: '2024-06-19T17:00:00.123456+09:00',
      bloodsugar: 130.0,
      foodnames: ['사과', '배'],
    },
    {
      recorddate: '2024-06-20T17:00:00.123456+09:00',
      bloodsugar: 120.0,
      foodnames: ['사과', '배'],
    },
    {
      recorddate: '2024-06-21T17:00:00.123456+09:00',
      bloodsugar: 110.0,
      foodnames: ['사과', '배'],
    },
    {
      recorddate: '2024-06-22T17:00:00.123456+09:00',
      bloodsugar: 100.0,
      foodnames: ['사과', '배'],
    },
    {
      recorddate: '2024-06-23T17:00:00.123456+09:00',
      bloodsugar: 150.0,
      foodnames: ['사과', '배'],
    },
    {
      recorddate: '2024-06-24T17:00:00.123456+09:00',
      bloodsugar: 130.0,
      foodnames: ['사과', '배', '사과', '배', '사과', '배', '사과', '배', '사과', '배'],
      expect: 130.0, // 전날 혈당값과 이어주기 위해서 존재
    },
    {
      recorddate: '2024-07-31T17:00:00.123456+09:00',
      expect: 140.0,
      foodnames: [],
    },
  ]);

  const fetchMainChartData = async () => {
    try {
      const newData = await axios.get(`${BASE_URL}/api/blood-sugar/food/${user_id}}`); // data를 배열 형식으로 새로 받아옴
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetchMainChartData();
    console.log('메인 그래프 리렌더링');
  });

  // 데이터 중 최대 혈당량을 구함
  const dataMax = Math.max(...data.map(d => d.bloodsugar));
  const dataMin = Math.min(...data.map(d => d.bloodsugar));

  // 포맷데이터를 추가 : key값은 formatDate
  const updateData = data.map(item => ({
    ...item,
    formatDate: formatDate(item.recorddate),
  }));

  return (
    <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden' }} className="custom-scroll">
      <div style={{ width: '1000px', height: '275px' }}>
        <LineChart
          width={1000}
          height={275}
          data={updateData}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis
            dataKey="recorddate"
            interval={0}
            tick={{ fontSize: 13 }}
            padding={{ left: 20, right: 20 }}
            tickFormatter={formatDate}
          />
          <YAxis domain={['dataMin-20', 'dataMax+5']} tickCount={6} allowDecimals={false} orientation="right" />
          {/* y축 인덱스의 최대/최소값은 혈당의 실제 최대/최소값-20 */}
          <Tooltip content={<MainBSToolTip />} wrapperStyle={{ overflow: 'visible' }} />
          <ReferenceLine y={dataMax} stroke="red" strokeDasharray="3 10"></ReferenceLine>
          <ReferenceLine y={dataMin} stroke="#A0A0A0" strokeDasharray="3 10"></ReferenceLine>
          <Line
            type="linear"
            dataKey="expect"
            stroke="#D6DDFE"
            strokeWidth={2}
            strokeDasharray="5 5" // 점선 설정
            dot={<CustomizedDot />}
            activeDot={{ r: 6, fill: '#3053f9', strokeWidth: 0 }}
          />
          <Line
            type="linear"
            dataKey="bloodsugar"
            stroke="#414141"
            strokeWidth={2}
            dot={{ r: 3, fill: 'black' }}
            activeDot={{ r: 6, fill: '#3053f9', strokeWidth: 0 }}
            // label={<CustomizedLabel dataMax={dataMax} />}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default MainBloodSugarChart;
