import MainHeader from '../../common/components/MainHeader';
import Background from '../imgs/Background.svg';
import styled from 'styled-components';
import FoodWikiSearch from '../components/FoodWiki/FoodWikiSearch';

const FoodWikiPage = () => {
  return (
    <>
      <PageBackground>
        <MainHeader></MainHeader>
        <FoodWikiSearch></FoodWikiSearch>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  background-image: url(${Background});
  background-size: cover;
`;

export default FoodWikiPage;
