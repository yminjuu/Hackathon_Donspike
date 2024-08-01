import { useState } from 'react';
import { css, styled } from 'styled-components';
import OftFoodItem from '../FoodNavSec/components/OftFoodItem';
import AddFoodInfo from '../FoodNavSec/components/AddFoodInfo';

const FoodNavigationSection = ({ selectedDate }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const user_id = 1;

  // 알맞게 선택된 날짜 전달되고 있음
  console.log(selectedDate);

  // 자주 먹은 음식 데이터
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const newData = await axios.get(
        // month 동적??? 이번달 거만 보내주는건지???
        `${BASE_URL}/api/{user_id}/food/favorites?month=2024-07`,
      );
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  // dummy data
  const dummyFoodData = [
    { food_id: 1, food_name: '흰쌀밥', food_info: '1공기(210g)', addedState: 'false' },
    { food_id: 2, food_name: '흰쌀밥', food_info: '1공기(210g)', addedState: 'true' },
    { food_id: 3, food_name: '흰쌀밥', food_info: '1공기(210g)', addedState: 'false' },
    { food_id: 4, food_name: '흰쌀밥', food_info: '1공기(210g)', addedState: 'true' },
    { food_id: 5, food_name: '흰쌀밥', food_info: '1공기(210g)', addedState: 'false' },
    { food_id: 6, food_name: '흰쌀밥', food_info: '1공기(210g)', addedState: 'true' },
  ];

  const [navstate, setNavstate] = useState('freq');
  // freq, onHand

  const onNavClick = navkey => {
    if (navstate === 'freq' && navkey === 'onHand') {
      // API GET : 자주 먹었어요! 데이터 받아서 알맞게 뿌리기
      setNavstate('onHand');
    } else if (navstate === 'onHand' && navkey === 'freq') {
      setNavstate('freq');
    }
  };

  // 직접 음식 등록
  const onFoodReg = async ({ foodname, amount, calorie, carbohydrate, protein, fat }) => {
    // 여기서 매개변수를 받아서 axios.post 호출
    try {
      console.log(foodname);
      console.log(amount);
      console.log(calorie);
      console.log(carbohydrate);
      console.log(protein);
      console.log(fat);
      // const res = await axios.post(`${BASE_URL}/api/${user_id}/food`, {
      //   foodname: foodname,
      //   amount: amount,
      //   calorie: calorie,
      //   carbohydrate: carbohydrate,
      //   protein: protein,
      //   fat: fat,
      // });

      if (res.status === 200) {
        console.log('음식 등록 완료 ', res);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log('음식 등록 실패');
      }
      console.log(error);
    }
  };

  return (
    <>
      <PageBackground>
        <NavWrapper>
          <NavItem
            onClick={() => {
              onNavClick('freq');
            }}
            $navstate={navstate}
            $navkey="freq"
          >
            자주 먹었어요!
          </NavItem>
          <NavItem
            onClick={() => {
              onNavClick('onHand');
            }}
            $navstate={navstate}
            $navkey="onHand"
          >
            직접 등록해요!
          </NavItem>
        </NavWrapper>
        <ItemsWrapper $navstate={navstate}>
          {navstate === 'freq' ? (
            dummyFoodData.map(item => <OftFoodItem key={item.food_id} {...item}></OftFoodItem>)
          ) : (
            <AddFoodInfo onClick={onFoodReg}></AddFoodInfo>
          )}
        </ItemsWrapper>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  width: 90rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavWrapper = styled.div`
  width: 15.875rem;
  height: 2.5rem;
  flex-shrink: 0;
  margin: 1.1rem;

  display: flex;
  flex-direction: row;
`;

const NavItem = styled.div`
  width: 8.125rem;
  height: 2.5rem;

  cursor: pointer;

  border-radius: 1.875rem;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  font-weight: 600;

  ${props =>
    props.$navstate === props.$navkey
      ? // 현재 state가 해당 버튼이 눌린 상태라면
        css`
          background: #111111;
          color: white;
        `
      : css`
          background: transparent;
          color: #707070;
        `};
  // 여기 좀 잘한듯 메모
`;

const ItemsWrapper = styled.div`
  width: 47.625rem;
  height: 27rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow-y: scroll;

  ${props =>
    props.$navstate === 'onHand'
      ? css`
          background-color: white;
          border-radius: 1rem;
          box-shadow: 2px 4px 10px #e8e8e8;
          height: 30rem;
        `
      : css`
          background-color: transparent;
        `}
`;

export default FoodNavigationSection;
