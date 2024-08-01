import styled from 'styled-components';
import AddBtn from '../imgs/AddButton.svg?react';
import AddDoneBtn from '../imgs/AfterAddButton.svg?react';
import { useState } from 'react';

// props: food_id, food_name, food_info, addedState

const FoodItem = ({ food_id, food_name, food_info, addedState, onClick }) => {
  console.log(onClick);
  const [added, setAdd] = useState(addedState);

  // 음식 추가됨
  const onAddBtnClick = () => {
    if (added === 'false') {
      setAdd('true'); // true로 변경하여 버튼 변경
      onClick(food_id);
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
        {added === 'true' ? <AddDoneBtn></AddDoneBtn> : <AddBtn></AddBtn>}
      </AddBtnWrapper>
    </>
  );
};

// AddDoneBtn: 이미 추가됨
// AddBtn: 추가 안 됨

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  margin-left: 2rem;
`;

const FoodTitle = styled.div`
  color: #111111;

  font-size: 1.125rem;
  font-weight: 600;
`;

const FoodInfo = styled.div`
  color: #414141;

  /* Pretendard/Md/12 */
  font-size: 0.75rem;
  font-weight: 500;
`;

const AddBtnWrapper = styled.div`
  cursor: pointer;
  margin-right: 1.7rem;
`;

export default FoodItem;
