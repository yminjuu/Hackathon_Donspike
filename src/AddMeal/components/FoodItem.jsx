import styled from 'styled-components';
import AddBtn from '../imgs/AddButton.svg?react';
import AddDoneBtn from '../imgs/AfterAddButton.svg?react';
import { useState } from 'react';

// props: food_id, food_name, food_info, addedState
const FoodItem = ({ food_id, food_name, food_info, addedState }) => {
  const [added, setAdd] = useState(addedState);

  // 음식 추가됨
  const onAddBtnClick = () => {
    added === true ? setAdd(false) : setAdd(true);
    if (added === true) {
      // 식단 추가 버튼이 눌린 경우임 => 식단 추가 POST
    }
  };

  return (
    <>
      <InfoWrapper>
        <FoodTitle>{food_name}</FoodTitle>
        <FoodInfo>{food_info}</FoodInfo>
      </InfoWrapper>
      <AddBtnWrapper onClick={onAddBtnClick}>
        {added === true ? <AddDoneBtn></AddDoneBtn> : <AddBtn></AddBtn>}
      </AddBtnWrapper>
    </>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  margin-left: 2rem;
`;

const FoodTitle = styled.div`
  color: #111111;

  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FoodInfo = styled.div`
  color: #414141;

  /* Pretendard/Md/12 */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const AddBtnWrapper = styled.div`
  cursor: pointer;
  margin-right: 1.7rem;
`;

export default FoodItem;
