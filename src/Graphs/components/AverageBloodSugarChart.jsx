// LineChartComponent.jsx
import { useEffect, React, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, LabelList } from 'recharts';
import '../styles/CustomScroll.css';
import CustomLabel from '../AverageBS/CustomLabel';
import axios from 'axios';

// 필요한 부분 : 실제 날짜를 name으로 변환하는 과정에서 이번 달에 해당되는 데이터를
// 구분하기 위한 속성 추가하기
const data = [
  { name: '1월', average: 130 },
  { name: '2월', average: 150 },
  { name: '3월', average: 110 },
  { name: '4월', average: 100 },
  { name: '5월', average: 90 },
  { name: '6월', average: 100 },
  { name: '7월', average: 110 },
  { name: '8월', average: 130 },
  { name: '9월', average: 100 },
  { name: '10월', average: 105 },
  { name: '11월', average: 110 },
  { name: '12월', average: 120 },
];

const AverageBloodSugarChart = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const user_id = 1;

  const [data, setData] = useState([]); // 메인 그래프 데이터
  // API 연결시 초기값 빈배열로 지우기

  useEffect(() => {
    fetchAverageData();
  }, []);

  const fetchAverageData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/blood-sugar/average?user_id=${user_id}&year=2024`);

      if (res.status === 200) {
        console.log('평균 API 연동 결과: ', res);
        setData(res.data[0]);
        // name은 달 이름으로, average는 평균 혈당값으로
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
      }
      console.log('평균 혈당 오류 발생: ', error);
    }
  };

  return (
    <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden' }} className="custom-scroll">
      <div style={{ width: '900px', height: '270px' }}>
        <LineChart
          width={900}
          height={270}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
          <Tooltip />
          <Line
            type="linear"
            dataKey="average"
            stroke="#414141"
            strokeWidth={2}
            dot={{ r: 3, fill: 'black' }}
            activeDot={{ r: 6, fill: '#3053f9', strokeWidth: 0 }}
            label={<CustomLabel />}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default AverageBloodSugarChart;
