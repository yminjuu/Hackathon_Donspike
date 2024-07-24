import styled from 'styled-components';
import AddBtn from '../imgs/AddBtn.svg?react';
import AddDoneBtn from '../imgs/AddDoneBtn.svg?react';
import { useState } from 'react';

// props로 정보 받아서 띄우기
const SearchItem = ({}) => {
  const fooddata_id = 1;
  const foodname = '흰쌀밥';
  const amount = '한 공기 (210g)';

  const [added, setAdd] = useState(false);

  // 음식 추가됨
  const onAddBtnClick = () => {
    added === true ? setAdd(false) : setAdd(true);
    if (added === true) {
      // 식단 추가 버튼이 눌린 경우임 => 식단 추가 POST
    }
  };

  return (
    <>
      <SearchItemWrapper>
        <InfoWrapper>
          <FoodTitle>{foodname}</FoodTitle>
          <FoodInfo>{amount}</FoodInfo>
        </InfoWrapper>
        <AddBtnWrapper onClick={onAddBtnClick}>
          {added === true ? <AddDoneBtn></AddDoneBtn> : <AddBtn></AddBtn>}
        </AddBtnWrapper>
      </SearchItemWrapper>
    </>
  );
};

const SearchItemWrapper = styled.div`
  height: 6.66rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

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

export default SearchItem;
