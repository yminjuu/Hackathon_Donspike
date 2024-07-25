import styled from 'styled-components';
import ExampleImg from '../../imgs/exSearchImg.svg';
import { useNavigate } from 'react-router-dom';

const FoodWikiItem = ({ food_id, food_name }) => {
  const navigate = useNavigate();

  const onItemClick = () => {
    console.log('아이템 클릭');

    // API GET => 존재하는 경우에만 FoodInfoPage로 넘어감
    navigate('/foodWiki/search?query=사과');
  };

  return (
    <>
      <InfoWrapper onClick={onItemClick}>
        <FoodImg></FoodImg>
        <FoodTitle>{food_name}</FoodTitle>
      </InfoWrapper>
    </>
  );
};

const InfoWrapper = styled.div`
  cursor: pointer;
  width: 90%;
  margin: 0.8rem;
  padding: 0.2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  &:hover {
    background-color: #fafff2;
  }
`;

const FoodImg = styled.img`
  width: 4.375rem;
  height: 4.375rem;
  flex-shrink: 0;

  background: url(${ExampleImg});
`;
const FoodTitle = styled.div`
  color: #111111;

  font-size: 1rem;
  font-weight: 500;
`;

export default FoodWikiItem;
