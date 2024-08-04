import styled from 'styled-components';
import Blood from '../../assets/bloodIcon.svg?react';
import Eat from '../../assets/eatIcon.svg?react';
import Rec from '../../assets/recIcon.svg?react';
import Search from '../../assets/searchIcon.svg?react';

const Tip = ({ tip_title, tip_content }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        {tip_title === '전문가의 소견' ? <Search></Search> : <></>}
        {tip_title === '적정 섭취량' ? <Eat></Eat> : <></>}
        {tip_title === '추천 섭취 방법' ? <Rec></Rec> : <></>}
        {tip_title === '혈당 지수' ? <Blood></Blood> : <></>}
        <Title>{tip_title}</Title>
      </TitleWrapper>
      <Content>{tip_content}</Content>
      {/* horizon */}
      {tip_title != '혈당 지수' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="2" viewBox="0 0 550 2" fill="none">
          <path d="M1 1L631 0.999951" stroke="#E8E8E8" strokeLinecap="round" />
        </svg>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 35rem;
  height: auto;
  margin: 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.div`
  color: #111111;

  font-size: 1.2rem;
  font-weight: 700;
`;

const Content = styled.div`
  color: #414141;
  font-size: 0.8rem;
  font-weight: 350;

  letter-spacing: 0.03rem; //자간
  word-spacing: 0.05rem; //어간
  line-height: 1.5rem; // 행간
`;

export default Tip;
