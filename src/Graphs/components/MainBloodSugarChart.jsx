/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import MainBSToolTip from '../MainBS/MainBSToolTip';
import '../styles/CustomScroll.css';
import axios from 'axios';

// 8/2 형식
const formatDate = dateString => {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();
  return `${month}/${day}`;
};

// 2024/08/02 형식
const tooltipDate = dateString => {
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

  // 오늘 날짜와 동일하면 띄우도록 설정을 해두었음.
  if (
    date.getFullYear() === indexDate.getFullYear() &&
    date.getMonth() === indexDate.getMonth() &&
    date.getDate() === indexDate.getDate()
  ) {
    return <circle cx={cx} cy={cy} r={5} stroke={stroke} strokeWidth={1} fill="#D6DDFE" />;
  } else return <></>;
};

const MainBloodSugarChart = ({ fetchMainChartData, mainData }) => {
  // 최초 렌더링시 데이터 가져옴
  useEffect(() => {
    fetchMainChartData();
  }, []);

  // 데이터 중 최대 혈당량을 구함 => reference line 위함
  const dataMax = Math.max(...mainData.map(d => d.bloodsugar));
  const dataMin = Math.min(...mainData.map(d => d.bloodsugar));

  // 포맷데이터를 추가 : key값은 formatDate, tooltip의 날짜는 tooltipDate
  const updateData = mainData.map(item => ({
    ...item,
    formatDate: formatDate(item.recorddate),
    tooltipDate: tooltipDate(item.recorddate),
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
          />
        </LineChart>
      </div>
    </div>
  );
};

export default MainBloodSugarChart;
