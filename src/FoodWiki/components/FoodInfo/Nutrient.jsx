import styled from 'styled-components';
import ExImg from '../../imgs/exImg.svg?react';

const Nutrient = ({ BasicData, Nutrient }) => {
  return (
    <Wrapper>
      <BasicWrapper>
        <ExImg></ExImg>
        <FoodWrapper>
          <FoodTitle>{BasicData.food_name}</FoodTitle>
          <FoodAmount>{BasicData.food_amount}</FoodAmount>
        </FoodWrapper>
      </BasicWrapper>
      <NutrientWrapper>
        {Nutrient.map((item, index) => {
          const [key, value] = Object.entries(item)[0];
          return (
            <>
              <NutrientItem key={index}>
                <Index>{key}</Index>
                <ValueWrapper>
                  <Number>{value}</Number>
                  <Unit>g</Unit>
                </ValueWrapper>
              </NutrientItem>
              {key != '콜레스테롤' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="350" height="2" viewBox="0 0 350 2" fill="none">
                  <path d="M1 1L426 0.999967" stroke="#E8E8E8" stroke-linecap="round" />
                </svg>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </NutrientWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const BasicWrapper = styled.div`
  width: 15rem;
  height: 6rem;
  flex-shrink: 0;
  margin-top: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const NutrientWrapper = styled.div`
  width: 30rem;
  flex-shrink: 0;

  border-radius: 1.25rem;
  border: 1px solid #e8e8e8;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FoodWrapper = styled.div`
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;

  margin-left: 1rem;
`;

const FoodTitle = styled.div`
  color: #414141;

  font-size: 1.875rem;
  font-weight: 700;
`;

const FoodAmount = styled.div`
  color: #707070;

  font-size: 0.875rem;
  font-weight: 500;
`;

const NutrientItem = styled.div`
  margin: 1.3rem;
  width: 17rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Index = styled.div`
  color: #414141;
  font-size: 1.125rem;
  font-weight: 600;
`;

const ValueWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const Number = styled.span`
  width: 4.375rem;
  height: 1.875rem;
  flex-shrink: 0;

  border-radius: 1.25rem;
  background: #f0f1f5;

  color: #111111;
  font-size: 1.125rem;
  font-weight: 600;

  text-align: center;
  line-height: 1.875rem;
`;

const Unit = styled.span`
  color: #707070;

  font-size: 1rem;
  font-weight: 500;

  text-align: center;
  display: flex;
  align-items: center;
`;

export default Nutrient;
