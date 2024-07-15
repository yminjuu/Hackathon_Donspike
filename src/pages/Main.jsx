import FoodInfo from '../components/Main/FoodInfo';
import Graph from '../components/Main/Graph';
import MainHeader from '../components/Main/MainHeader';
import styled from 'styled-components';

const Main = () => {
  return (
    <ContentWrapper>
      <MainHeader></MainHeader>
      <Graph></Graph>
      <FoodInfo></FoodInfo>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  height: 100%;
  overflow: auto; /* 상단 헤더 고정 */
`;
export default Main;
