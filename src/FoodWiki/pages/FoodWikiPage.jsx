import MainHeader from '../../common/components/MainHeader';
import styled from 'styled-components';
import FoodWikiSearch from '../components/FoodWiki/FoodWikiSearch';
import FoodCarousel from '../components/FoodWiki/FoodCarousel';

const FoodWikiPage = () => {
  return (
    <>
      <PageBackground>
        <MainHeader></MainHeader>
        <FoodWikiSearch></FoodWikiSearch>
        <CarouselWrapper>
          <CarouselTitle>최근 먹은 음식</CarouselTitle>
          <FoodCarousel></FoodCarousel>
        </CarouselWrapper>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  background-image: url('https://raw.githubusercontent.com/yminjuu/DONTSPIKE_FE/328516018febe495fa3f66b464cc9b82e25d8344/public/FoodWikiBG.svg');
  background-size: cover;
`;

const CarouselWrapper = styled.div`
  margin: 0 10rem;
  margin-top: 6rem;

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
