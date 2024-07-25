import styled from 'styled-components';

const Tip = ({ tip_title, tip_content }) => {
  return (
    <Wrapper>
      <Title>{tip_title}</Title>
      <Content>{tip_content}</Content>
      {/* horizon */}
      {tip_title != '혈당 지수' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="550" height="2" viewBox="0 0 550 2" fill="none">
          <path d="M1 1L631 0.999951" stroke="#E8E8E8" strokLinecap="round" />
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
