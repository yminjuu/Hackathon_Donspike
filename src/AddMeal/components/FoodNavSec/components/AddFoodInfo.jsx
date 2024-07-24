import { css, styled } from 'styled-components';
import AddFoodDoneBtn from '../imgs/AddFoodDoneBtn.svg?react';
import AddFoodBtn from '../imgs/AddFoodBtn.svg?react';
import DisableBtn from '../imgs/AddFoodBtnDisable.svg?react';
import ResetBtn from '../imgs/ResetBtn.svg?react';
import Horizon from '../imgs/Horizon.svg?react';
import Essential from '../imgs/Essential.svg?react';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

// 직접 음식 등록하기
const AddFoodInfo = () => {
  const [foodname, setFoodname] = useState('');
  const foodNameRef = useRef();

  const [regstate, setRegState] = useState(false);

  const onContentChange = e => {
    setFoodname(e.target.value);
    if (regstate === true) setRegState(false);
  };

  const onRegBtn = () => {
    console.log('등록 버튼 눌림');
    setFoodname('');
    setRegState(true);
  };

  const onResetBtn = () => {
    setFoodname('');
    setRegState(false);
  };

  const FormInfo = [
    { index: '내용량', unit: 'g' },
    { index: '칼로리', unit: 'kcal' },
    { index: '탄수화물', unit: 'g' },
    { index: '단백질', unit: 'g' },
    { index: '지방', unit: 'g' },
  ];

  return (
    <Wrapper>
      <ResetWrapper onClick={onResetBtn}>
        <ResetBtn></ResetBtn>
        입력 초기화
      </ResetWrapper>
      <TitleWrapper>
        <TitleTextWrapper>
          <TitleText>음식명</TitleText>
          {/* 필수 입력 항목 명시 아이콘 */}
          <Essential></Essential>
        </TitleTextWrapper>
        <BigInput type="name" ref={foodNameRef} onChange={onContentChange} value={foodname}></BigInput>
      </TitleWrapper>
      <HorizonWrapper>
        <Horizon></Horizon>
        <HorizonText>영양정보</HorizonText>
        <Horizon></Horizon>
      </HorizonWrapper>
      {/* 영양정보 horizon  */}
      <InfoWrapper>
        <IndexWrapper>
          {FormInfo.map(item => (
            // React.Fragment를 사용하면 여러개의 태그를 map함수를 통해 반환할 수 있다.
            <Text key={item.index}>
              {item.index}
              {item.index === '내용량' ? <LittleText>1인분을 기준으로 내용량을 입력해주세요.</LittleText> : <></>}
            </Text>
          ))}
        </IndexWrapper>
        <InputWrapper>
          {FormInfo.map(item => (
            <SmallInput key={item.index} type="number"></SmallInput>
          ))}
        </InputWrapper>
        <UnitWrapper>
          {FormInfo.map(item => (
            <Unit key={item.index}>{item.unit}</Unit>
          ))}
        </UnitWrapper>
      </InfoWrapper>
      <ButtonWrapper onClick={onRegBtn}>
        {regstate === true ? (
          <AddFoodDoneBtn></AddFoodDoneBtn>
        ) : foodname !== '' ? (
          <AddFoodBtn></AddFoodBtn>
        ) : (
          <DisableBtn></DisableBtn>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResetWrapper = styled.div`
  cursor: pointer;

  width: 45rem;
  height: 0.9rem;
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 0.2rem;

  padding-top: 1.5rem;
  padding-right: 2.5rem;

  color: #707070;

  /* Pretendard/Md/12 */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TitleWrapper = styled.div`
  width: 36rem;
  height: 2rem;
  margin-top: 1rem;

  display: flex;
  gap: 0.9rem;
`;

const TitleTextWrapper = styled.div`
  height: 2.5rem;
  color: #111111;

  /* Pretendard/Sb/18 */
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const HorizonWrapper = styled.div`
  width: 35rem;
  height: 2.625rem;
  margin: 1rem 0rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HorizonText = styled.div`
  color: var(--Grayscale-40, #a0a0a0);

  /* Pretendard/Md/12 */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const IndexWrapper = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  margin-left: 6rem;
`;

const InputWrapper = styled.div`
  width: 17.5rem;
  height: 17rem;
  display: flex;
  flex-direction: column;
  gap: 0.88rem;
`;

const UnitWrapper = styled.div`
  height: 17.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-left: 0.3rem;
`;

const TitleText = styled.span`
  color: #111111;

  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;

  text-align: center;
  line-height: 2.5rem;
`;

const Text = styled.div`
  width: 14rem;
  height: 2.5rem;
  color: #111111;

  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;

  text-align: left;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const LittleText = styled.div`
  display: inline-block;
  color: #707070;

  /* Pretendard/Md/12 */
  font-family: Pretendard;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const BigInput = styled.input`
  outline: none;
  border: none;

  display: flex;
  width: 29.25rem;
  height: 2.7rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: #ebeeff;
  border-radius: 1rem;

  text-align: left;
  padding: 0rem 1rem;
`;

const SmallInput = styled.input`
  outline: none;
  border: none;

  display: flex;
  width: 15.5rem;
  height: 2.1rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background-color: #ebeeff;
  border-radius: 1rem;

  color: #111111;
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  padding: 0.2rem 1rem;
`;

const Unit = styled.span`
  height: 2.5rem;
  color: #707070;

  /* Pretendard/Md/14 */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.5rem;

  text-align: left;
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 0.88rem;
`;

export default AddFoodInfo;
