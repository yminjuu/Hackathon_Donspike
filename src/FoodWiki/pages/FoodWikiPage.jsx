import MainHeader from '../../common/components/MainHeader';
import styled from 'styled-components';
import FoodWikiSearch from '../components/FoodWiki/FoodWikiSearch';
import FoodCarousel from '../components/FoodWiki/FoodCarousel';
import { useParams } from 'react-router-dom';
import React from 'react';

export const FoodWikiIdContext = React.createContext();

const FoodWikiPage = () => {
  const { id } = useParams();

  return (
    <FoodWikiIdContext.Provider value={id}>
      <PageBackground>
        <MainHeader currState="foodwiki"></MainHeader>
        <FoodWikiSearch></FoodWikiSearch>
        <CarouselBox>
          <CarouselWrapper>
            <CarouselTitle>최근 먹은 음식</CarouselTitle>
            <FoodCarousel></FoodCarousel>
          </CarouselWrapper>
        </CarouselBox>
      </PageBackground>
    </FoodWikiIdContext.Provider>
  );
};

const PageBackground = styled.div`
  background-image: url('https://raw.githubusercontent.com/yminjuu/DONTSPIKE_FE/328516018febe495fa3f66b464cc9b82e25d8344/public/FoodWikiBG.svg');
  background-size: cover;

  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CarouselBox = styled.div`
  width: 100%;
  background-color: #fafff2;

  flex: 1 0 auto;
  border-top: 2px solid #e8e8e8;
`;

const CarouselWrapper = styled.div`
  margin: 0 10rem;
  padding-top: 2rem;

  flex-shrink: 0;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CarouselTitle = styled.div`
  color: #414141;
  font-size: 1.5rem;
  font-weight: 500;
`;

export default FoodWikiPage;
