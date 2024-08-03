// LineChartComponent.jsx
import { useEffect, React, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, LabelList } from 'recharts';
import '../styles/CustomScroll.css';
import CustomLabel from '../AverageBS/CustomLabel';
import axios from 'axios';

const AverageBloodSugarChart = ({ fetchAverageData, averageData }) => {
  useEffect(() => {
    fetchAverageData();
  }, []);

  return (
    <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden' }} className="custom-scroll">
      <div style={{ width: '900px', height: '270px' }}>
        <LineChart
          width={900}
          height={270}
          data={averageData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
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
