import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import SubPageHeader from '../../common/components/SubPageHeader';
import FoodWikiLogo from '../assets/FoodWikiLogo.svg?react';
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
      const res = await axios.get(`https://api.donspike.store/api/foodwiki?search_food=${query}`);

      setData(res.data[0]); // state 변경 => 리렌더링
      console.log(data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // 검색 결과 없을 때 처리
        console.log('에러 발생', res);
      }
    }
  };

  // 초기 렌더링 => 정보 가져옴
  useEffect(() => {
    fetchFoodWikiSearchResult();
  }, []);

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
          <Nutrient {...data}></Nutrient>
        </InfoWrapper>
        <TipWrapper>
          <Tip tip_title="전문가의 소견" tip_content={data.expertOpinion} />
          <Tip tip_title="적정 섭취량" tip_content={data.properIntake} />
          <Tip tip_title="추천 섭취 방법" tip_content={data.ingestionMethod} />
          <Tip tip_title="혈당 지수" tip_content={data.gi} />
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
