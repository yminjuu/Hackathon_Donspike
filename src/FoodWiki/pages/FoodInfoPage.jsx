import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import SubPageHeader from '../../common/components/SubPageHeader';
import FoodWikiLogo from '../imgs/FoodWikiLogo.svg?react';
import Tip from '../components/FoodInfo/Tip';
import Nutrient from '../components/FoodInfo/Nutrient';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FoodInfoPage = () => {
  const [foodSearch] = useSearchParams();
  const query = foodSearch.get('query');

  const [data, setData] = useState([]);

  const fetchFoodWikiSearchResult = async () => {
    try {
      console.log('여기');
      const res = await axios.get(`https://api.donspike.store/api/foodwiki?search_food=${query}`);
      console.log(res.data[0]); // 응답 중 data만 출력

      setData(res.data[0]); // state 변경 => 리렌더링
      console.log('result set 완료');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // 검색 결과 없을 때 처리
      }
    }
  };

  useEffect(() => {
    fetchFoodWikiSearchResult();
  }, []);

  console.log('검색어: ' + query);

  // 더미 기본 정보
  const dummyBasicData = {
    food_name: '사과',
    food_amount: '250g',
  };

  // 더미 영양정보 데이터
  const dummyNutrient = [
    { 열량: 142 },
    { 탄수화물: 35.3 },
    { 단백질: 0.5 },
    { 지방: 1.6 },
    { 나트륨: 0 },
    { 콜레스테롤: 0 },
  ];

  // 더미 팁 데이터
  const dummyTip = [
    {
      tip_title: '전문가의 소견',
      tip_content:
        '사과의 혈당 지수는 36으로 혈당 지수가 엄청나게 높은 음식은 아니예요. 사과에는 탄수화물, 식이섬유, 비타민C가 들어있어요. 사과가 달기 때문에 당뇨를 더 악화시키지 않을까? 하는 의견이 많지만 사실 사과 껍질에 있는 폴리페놀들이 인슐린을 더 잘 작동할 수 있게끔 도와줘요.',
    },
    {
      tip_title: '적정 섭취량',
      tip_content: '하루 한 개가 적당해요! 혈당이 너무 높다면 아침 반쪽, 저녁 반쪽 분산해서 섭취하세요!',
    },
    {
      tip_title: '추천 섭취 방법',
      tip_content:
        '사과의 껍질이 없으면 영양소의 99%가 없어지는 셈이기 때문에 꼭 껍질째로 섭취하세요! 당뇨가 있다면 당연히 주스로 먹는 건 피하셔야 합니다.',
    },
    {
      tip_title: '혈당 지수',
      tip_content: '사과의 혈당지수는 36으로, 설탕에 비해 비교적 높은 음식은 아니며 저혈당 제품에 속합니다.',
    },
  ];

  return (
    <>
      <HeaderWrapper>
        <SubPageHeader type="FoodInfo"></SubPageHeader>
        <LogoWrapper>
          <FoodWikiLogo></FoodWikiLogo>
        </LogoWrapper>
      </HeaderWrapper>
      <ContentWrapper>
        <InfoWrapper>
          <Nutrient BasicData={dummyBasicData} Nutrient={dummyNutrient}></Nutrient>
          {/* <Nutrient></Nutrient> */}
        </InfoWrapper>
        <TipWrapper>
          {dummyTip.map(item => (
            <Tip key={item.tip_title} {...item}></Tip>
          ))}
        </TipWrapper>
      </ContentWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;

  background-color: #fafff2;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin: 0 3rem;
`;

const InfoWrapper = styled.div`
  width: 38rem;
  height: 38rem;
  flex-shrink: 0;
`;

const TipWrapper = styled.div`
  width: 38rem;
  height: 33rem;
  flex-shrink: 0;
  margin: 3rem 0;

  border-radius: 0.625rem;
  border: 1px solid #cfcfcf;
  background-color: #fafff2;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FoodInfoPage;
