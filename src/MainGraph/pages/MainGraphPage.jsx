import MainHeader from '../../common/components/MainHeader';
import MainBloodSugar from '../../Sec1_MainBloodSugar/MainBloodSugar';
import AverageBloodSugar from '../../Sec3_AverageBloodSugar/AverageBloodSugar';
import FoodBar from '../../Sec2_FoodBar/FoodBar';

import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const monthMapping = {
  JANUARY: '1월',
  FEBRUARY: '2월',
  MARCH: '3월',
  APRIL: '4월',
  MAY: '5월',
  JUNE: '6월',
  JULY: '7월',
  AUGUST: '8월',
  SEPTEMBER: '9월',
  OCTOBER: '10월',
  NOVEMBER: '11월',
  DECEMBER: '12월',
};

const monthOrder = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];

const data = {
  APRIL: 0,
  AUGUST: 166.18571428571428,
  DECEMBER: 0,
  FEBRUARY: 0,
  JANUARY: 0,
  JULY: 129.75833333333333,
  JUNE: 0,
  MARCH: 0,
  MAY: 0,
  NOVEMBER: 0,
  OCTOBER: 0,
  SEPTEMBER: 0,
};

// 날짜순 정렬
const compare = (a, b) => {
  const dateA = new Date(a.recorddate);
  const dateB = new Date(b.recorddate);

  return dateA - dateB;
};

const parseData = data => {
  return monthOrder.reduce((result, month) => {
    const average = Math.round(data[month]);
    if (average !== 0) {
      result.push({
        name: monthMapping[month],
        average: average,
      });
    }
    return result;
  }, []);
};

const MainGraphPage = () => {
  const user_id = 1;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [bloodSugar, setBS] = useState([]);

  const [mainData, setMainData] = useState([]); // 메인 그래프 데이터

  const [averageData, setAverageData] = useState([]); // 평균 그래프 데이터

  useEffect(() => {
    // 혈당값이 바뀌면 밑의 2가지 그래프 리렌더링 발생
    fetchMainChartData();
    fetchAverageData();
  }, [bloodSugar]);

  // 메인 그래프 data fetch
  const fetchMainChartData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/blood-sugar/food/${user_id}`); // data를 배열 형식으로 새로 받아옴

      // 임의의 예상값 추가 => 실제 예상하도록 고쳐야함
      const newData = [
        ...res.data,
        { bloodsugar: 135, recorddate: '2024-08-04T20:03:30', foodBsMappingId: ['감자탕', '짜장면'], expect: 135 },
        // 예상 혈당 구분을 위해서 혈당을 0으로 set
        { bloodsugar: NaN, recorddate: '2024-08-05T20:03:30', foodBsMappingId: [], expect: 140 },
      ];
      setMainData(newData.sort(compare));
    } catch (error) {
      console.log('에러 발생', error);
    }
  };

  // 평균 혈당 그래프 data fetch
  const fetchAverageData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/blood-sugar/average?user_id=${user_id}&year=2024`);

      if (res.status === 200) {
        setAverageData(parseData(res.data.monthly_averages));
        // setAverageData(dummyData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageBackground>
        <MainHeader></MainHeader>
        <SectionsWrapper>
          {/* 제목 + 혈당 섹션 */}
          <SectionWrapper>
            <MainBloodSugar setBS={setBS} mainData={mainData} fetchMainChartData={fetchMainChartData}></MainBloodSugar>
          </SectionWrapper>
          {/* 구분선 추가 */}
          <HorizonWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="1292" height="1" viewBox="0 0 1292 1" fill="none">
              <path d="M1 0.5L1291 0.5" stroke="#CFCFCF" strokeLinecap="round" />
            </svg>
          </HorizonWrapper>
          {/* 하단 그래프 2개 섹션*/}
          <SectionWrapper2>
            <FoodBar></FoodBar>
            <AverageBloodSugar fetchAverageData={fetchAverageData} averageData={averageData}></AverageBloodSugar>
          </SectionWrapper2>
        </SectionsWrapper>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  background-image: url('https://raw.githubusercontent.com/yminjuu/DONTSPIKE_FE/328516018febe495fa3f66b464cc9b82e25d8344/public/MainBG.svg');
  background-size: cover;
`;

const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1.1rem 4.69rem 1.3rem 4.69rem;
`;

const SectionWrapper2 = styled.section`
  display: flex;
  flex-direction: row;
  margin: 1.3rem 4.69rem 2.5rem 4.69rem;
  justify-content: center;
  gap: 1.13rem;
`;

const HorizonWrapper = styled.div`
  width: 80.625rem;
  height: 1.75rem;
  flex-shrink: 0;
`;
export default MainGraphPage;
