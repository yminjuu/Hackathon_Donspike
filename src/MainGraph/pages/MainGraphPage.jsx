import MainHeader from '../../common/components/MainHeader';
import MainBloodSugarChart from '../../Graphs/components/MainBloodSugarChart';
import AddBloodSugar from '../components/AddBloodSugar';
import styled from 'styled-components';
import background from '../assets/imgs/background.svg';

const BloodSugarPage = () => {
  return (
    <>
      <PageBackground>
        <MainHeader></MainHeader>
        <p>BloodSugarPage</p>
        {/* <MainBloodSugarChart></MainBloodSugarChart> */}
        <AddBloodSugar></AddBloodSugar>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
`;

export default BloodSugarPage;
