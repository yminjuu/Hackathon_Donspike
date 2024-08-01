import styled from 'styled-components';
import AddBtn from '../../../imgs/AddButton.svg?react';
import AddDoneBtn from '../../../imgs/AfterAddButton.svg?react';
import { useState } from 'react';
import FoodItem from '../../FoodItem';

// props로 정보 받아서 띄우기
// props: food_id, food_name, food_info, addedState
const SearchItem = props => {
  return (
    <>
      <SearchItemWrapper>
        <FoodItem {...props}></FoodItem>
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

export default SearchItem;
