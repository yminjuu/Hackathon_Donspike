import { LineChart } from 'recharts';
import FoodInfo from '../components/Main/FoodInfo';
import MainHeader from '../components/Main/MainHeader';
import styled from 'styled-components';
import MainLineChart from '../components/Main/MainLineChart';

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
