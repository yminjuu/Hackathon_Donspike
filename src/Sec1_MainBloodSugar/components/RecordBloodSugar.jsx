import styled from 'styled-components';
import Button_before from '../assets/imgs/RecordBSBtn_Before.svg?react';
import Button_ok from '../assets/imgs/RecordBSBtn_OK.svg?react';
import Datepicker from './Datepicker';
import { useEffect, useState } from 'react';

const RecordBloodSugar = ({ setBS }) => {
  const [text, setText] = useState('');

  // 혈당 입력시
  const onBSInput = e => {
    setText(e.target.value);
  };
  return (
    <>
      <Wrapper>
        <Title>혈당 기록하기</Title>
        <LabelInput>
          <div>날짜</div>
          <Datepicker></Datepicker>
        </LabelInput>
        <LabelInput>
          <div>혈당</div>
          <InputWrapper>
            <BSInput onChange={onBSInput} value={text} type="number"></BSInput>
            <span>mg/dL</span>
          </InputWrapper>
        </LabelInput>
        <ButtonContainer>
          <ButtonWrapper>
            {text == '' ? (
              <StyledBtn_Before></StyledBtn_Before>
            ) : (
              <StyledBtn_OK
                onClick={e => {
                  setBS(e.target.value); // props로 전달받은 state 변경함수 실행 => 그래프 리렌더링되도록
                  setText('');
                }}
              ></StyledBtn_OK>
            )}
            {/* 혈당 입력 여부에 따라 버튼 비활성화/활성화되도록 수정해야 함 */}
          </ButtonWrapper>
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 27%;
  height: 19rem;
  flex-shrink: 0;
  margin: 2.31rem 2.87rem 2.88rem 1rem;
  padding: 1.69rem 1.25rem 0.88rem 2.69rem;

  border-radius: 0.625rem;
  background: #fff;
  /* drop-shadow */
  box-shadow: 2px 4px 10px 2px var(--Grayscale-10, #e8e8e8);

  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Title = styled.div`
  color: #111111;

  /* Pretendard/Sb/18 */

  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 2.3rem;
`;

const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: #414141;

  /* Pretendard/Sb/14 */

  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const InputWrapper = styled.div`
  height: 2.5rem;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  color: #414141;

  /* Pretendard/Sb/16 */

  font-size: 1rem;
  font-weight: 500;
`;

const BSInput = styled.input`
  box-sizing: content-box;
  width: 6.25rem;
  height: 2.5rem;
  color: #414141;

  font-size: 0.875rem;
  font-weight: 600;
  background-color: #f0f1f5;
  border-radius: 10px;
  border: none;
  outline: none;
  text-align: center;

  &::placeholder {
    color: #414141;

    /* Pretendard/Sb/14 */

    font-size: 0.875rem;
    font-weight: 500;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 2.5rem;

  display: flex;
  justify-content: right;
  margin-top: 0.8rem;
`;

const ButtonWrapper = styled.div`
  height: 2.5rem;
  cursor: pointer;
`;

const StyledBtn_OK = styled(Button_ok)``;

const StyledBtn_Before = styled(Button_before)`
  cursor: default;
`;
export default RecordBloodSugar;
