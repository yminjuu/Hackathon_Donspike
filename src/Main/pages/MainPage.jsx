import MainHeader from '../components/MainHeader';
import MainGraphSection from '../../MainGraphSection/pages/MainGraphPage';
import FoodWiki from '../../FoodWiki/pages/FoodWikiPage';

const MainPage = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <MainGraphSection></MainGraphSection>
      <FoodWiki></FoodWiki>
    </>
  );
};

// 컴포넌트로 BloodSugar와 FoodWiki를 import하는 Main Page
export default MainPage;
