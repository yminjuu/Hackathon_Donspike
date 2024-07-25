import MainHeader from '../../common/components/MainHeader';
import BackgroundPtrn from '../imgs/BackgroundPtrn';
import styled from 'styled-components';
import Taco from '../imgs/Taco.svg?react';
import { keyframes } from 'styled-components';

const FoodWikiPage = () => {
  return (
    <>
      <PageBackground>
        <MainHeader></MainHeader>
        <MainWrapper>
          <RotatingTaco></RotatingTaco>
          <Title>푸드위키</Title>
          <Description>음식을 검색해보세요! 혈당 관리에 도움이 되는 방법을 함께 알려드릴게요.</Description>
        </MainWrapper>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover; /* 이미지를 화면 크기에 맞게 조절 */
  background-repeat: no-repeat; /* 이미지가 반복되지 않도록 설정 */

  background-image: url(${BackgroundPtrn});
`;

const MainWrapper = styled.div`
  color: #414141;

  /* Pretendard/Reg/20 */

  font-size: 1.25rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: #111111;

  /* Pretendard/Sb/50 */

  font-size: 3.125rem;
  font-weight: 600;
`;

const Description = styled.div`
  color: #414141;

  /* Pretendard/Reg/20 */

  font-size: 1.25rem;
  font-weight: 400;
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
