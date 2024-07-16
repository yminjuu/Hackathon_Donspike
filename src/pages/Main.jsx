import { LineChart } from 'recharts';
import styled from 'styled-components';
import MainLineChart from '../Main/LineChart/MainLineChart';
import FoodInfo from '../Main/FoodInfo/FoodInfo';
import MainHeader from '../Main/MainHeader';

const Main = () => {
  return (
    <ContentWrapper>
      <MainHeader></MainHeader>
      <MainLineChart></MainLineChart>
      <FoodInfo></FoodInfo>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto; /* 상단 헤더 고정 */
`;

export default Main;
