import MainHeader from '../../common/components/MainHeader';
import Background from '../imgs/Background.svg';
import styled from 'styled-components';
import Taco from '../imgs/Taco.svg?react';
import { keyframes } from 'styled-components';
import SearchBox from '../../common/components/SearchBox';

const FoodWikiPage = () => {
  return (
    <>
      <PageBackground>
        <MainHeader></MainHeader>
        <MainWrapper>
          <RotatingTaco></RotatingTaco>
          <Title>푸드위키</Title>
          <Description>음식을 검색해보세요! 혈당 관리에 도움이 되는 방법을 함께 알려드릴게요.</Description>
          <SearchBox type="FoodWiki"></SearchBox>
        </MainWrapper>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  background-image: url(${Background});
  background-size: cover;

  position: relative;
`;

const MainWrapper = styled.div`
  color: #414141;

  /* Pretendard/Reg/20 */

  font-size: 1.25rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 0;
`;

const Title = styled.div`
  color: #111111;

  /* Pretendard/Sb/50 */

  font-size: 2.5rem;
  font-weight: 600;
`;

const Description = styled.div`
  color: #414141;

  /* Pretendard/Reg/20 */

  font-size: 0.8rem;
  font-weight: 400;

  margin: 2rem;
`;

const skew = keyframes`
0% {
  transform: rotateY(0deg);
}
20% {
  transform: rotateY(30deg);
}
40% {
  transform: rotateY(0deg);
}
60% {
  transform: rotateY(-30deg);
}
80% {
  transform: rotateY(0deg);
}
`;

const RotatingTaco = styled(Taco)`
  animation: ${skew} 10s infinite linear;
`;

export default FoodWikiPage;
