import styled from 'styled-components';
import Salad from '../../AddMeal/components/SearchSec/imgs/salad.jpg';
import SearchButton from '../assets/imgs/SearchButton.svg?react';
import SearchReset from '../assets/imgs/SearchReset.svg?react';
import { useState, useRef, useEffect } from 'react';
import { css } from 'styled-components';
import SearchItem from '../../AddMeal/components/SearchSec/components/SearchItem';
import FoodWikiItem from '../../FoodWiki/components/FoodWiki/FoodWikiItem';
import axios from 'axios';

const SearchBox = ({ type, fetchMeal }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const user_id = 1;

  // 검색 상태 관리
  const [searchstate, toggleSearchState] = useState(false); //초기 상태: false
  const searchInput = useRef(null);

  // 검색 성공 여부 관리
  const [searchSuccess, setSuccess] = useState(false);

  // 검색 결과 데이터 관리
  const [searchResult, setResult] = useState({});
  useEffect(() => {}, [searchResult]);

  // 검색어 관리
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText == '' && searchstate === true) {
      onSearchFalse();
    }
  }, [searchText]);

  // 푸드위키: 검색 관리
  // food_id="1" food_name="사과"
  const fetchFoodWikiSearchResult = async () => {
    try {
      console.log('api 요청 : ', searchText);
      const res = await axios.get(`https://api.donspike.store/api/foodwiki?search_food=${searchText}`);
      console.log(res);
      console.log(res.data[0]); // 응답 중 data만 출력

      setSuccess(true); // 검색 성공
      setResult(res.data[0]); // state 변경 => 리렌더링
      console.log('result set 완료');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log('여기');
        // 검색 결과 없을 때 처리
        setSuccess(false);
      }
    }
  };

  // 식단 추가 : 검색 관리
  // food_id="1" food_name="흰쌀밥" food_info="한 공기" addedState={false}
  const fetchMealSearchResult = async () => {
    // console.log(`${BASE_URL}/api/${user_id}/food?search_food=${foodname}`);
    try {
      const data = await axios.get(`${BASE_URL}/api/${user_id}/food?search_food=${foodname}`);
      setSuccess(true);
      setResult(data); // state 변경 => 리렌더링
      console.log(data);
      // 식단에 이미 추가되어있는지 여부: 내가 default로 false로 설정?
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // 검색 결과 없을 때 처리
      }
    }
  };

  // 검색 버튼 클릭 => Wrapper이 알맞게 바뀜
  const onSearchBtnClick = () => {
    if (searchText != '') {
      if (!searchstate) onSearchTrue(); // API 데이터 받으러
      else onSearchFalse(); //이미 받아온 상태였음 (x버튼 클릭함)
    } else {
      searchInput.current.focus();
    }
  };

  // 검색 => 데이터 받아오기
  const onSearchTrue = () => {
    toggleSearchState(true); // reset 아이콘으로 바뀜
    if (type === 'FoodWiki') {
      console.log('foodwiki get');
      fetchFoodWikiSearchResult();
    } else if (type === 'SearchSection') {
      // fetchMealSearchResult();
    }
    // API 연결시 주석처리 제거
  };

  // X 버튼 누름 => 초기 검색 box로 돌아감
  const onSearchFalse = () => {
    setSearchText('');
    toggleSearchState(false); // 돋보기 아이콘으로 바뀜
  };

  return (
    <Container>
      <Wrapper $searchstate={searchstate} $type={type}>
        <InputBoxWrapper $searchstate={searchstate}>
          <StyledInput
            // 키보드 Enter 클릭시 검색 가능
            onKeyDown={e => {
              if (e.key === 'Enter' && searchstate === false) onSearchBtnClick();
            }}
            onChange={e => {
              setSearchText(e.target.value);
            }}
            ref={searchInput} /* focus effect를 사용하기 위해서 useRef 사용 */
            value={searchText}
            placeholder="예) 흰쌀밥, 생오이"
            $searchstate={searchstate} /* props 전달 */
          ></StyledInput>
          <BtnWrapper onClick={onSearchBtnClick}>
            {searchstate === true ? <SearchReset></SearchReset> : <SearchButton></SearchButton>}
          </BtnWrapper>
        </InputBoxWrapper>
        {/* {searchstate === true ? <StyledNoResult>일치하는 결과가 없습니다.</StyledNoResult> : <></>} */}
        {/* searchState===true이고 API 결과가 빈 배열 => 일치하는 결과가 없습니다*/}

        {/* searchState에 대한 조건 추가 */}
        {searchstate === true && type === 'SearchSection' ? (
          <SearchItem
            food_id={searchResult.food_id}
            food_name={searchResult.food_name}
            food_info={searchResult.food_info}
            addedState={searchResult.addedState}
            onClick={fetchMeal} // 음식 추가시
          ></SearchItem>
        ) : (
          <></>
        )}
        {/* <SeachSection> searchState===false이고 API 결과가 있음 => 알맞게 아이템을 만들어서 해당 컴포넌트를 반환 (클릭 이벤트 필요) */}

        {/* searchState에 대한 조건 추가 */}
        {searchstate === true ? <FoodWikiItem {...searchResult}></FoodWikiItem> : <></>}
        {/* <FoodWiki> searchState===false이고 API 결과가 있음 => 알맞게 아이템을 만들어서 해당 컴포넌트를 반환 (클릭 이벤트 필요) */}
      </Wrapper>
      {/* 위치가 SearchSection 일 때에만 디자인 추가*/}
      {type === 'SearchSection' ? (
        <TransparentWrapper>
          <StyledSalad src={Salad} />
        </TransparentWrapper>
      ) : (
        <></>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 33.75rem;
  height: 3.375rem;

  display: flex;
  justify-content: space-between;

  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.75rem;
  height: 3.375rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;

  /* drop-shadow */
  box-shadow: 2px 4px 10px 2px #e8e8e8;
  border-radius: 0.625rem;
  background-color: white;

  z-index: 5;

  ${props =>
    props.$searchstate === true
      ? // 다중 속성을 사용
        css`
          height: 10rem;
        `
      : css``};

  ${props =>
    props.$type === 'SearchSection'
      ? css`
          &:focus-within {
            box-shadow: none;
            box-shadow: 2px 2px 4px 2px #c1ccfe;
          }
        `
      : css``}// input 창이 focus 받으면
`;

const InputBoxWrapper = styled.div`
  width: 30rem;
  height: 3.375rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  ${props =>
    props.$searchstate === true
      ? // 다중 속성을 사용
        css`
          border-bottom: 1px solid #a0a0a0;
        `
      : css``};
`;

const StyledInput = styled.input`
  width: 80%;
  height: 3rem;
  color: #a0a0a0;

  /* Pretendard/Reg/20 */

  font-size: 1rem;
  font-weight: 400;
  border: none;
  outline: none;

  &::placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: #a0a0a0;
  }
`;

const BtnWrapper = styled.div`
  cursor: pointer;
`;

// 햄버거, 감튀 요소의 position: absolute을 위해 존재하는 투명한 컨테이너 (position: absolute 사용을 위해서)
const TransparentWrapper = styled.div`
  width: 33.75rem;
  height: 3.375rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
`;

const StyledSalad = styled.img`
  width: 6rem;
  height: 7rem;

  position: absolute;
  top: -170%;
  left: 83%; /* Adjust based on the position of the icon */
  z-index: 4;
`;

const StyledNoResult = styled.div`
  height: 6.66rem;
  width: 100%;

  text-align: center;

  color: #414141;

  /* Pretendard/Reg/16 */

  font-size: 0.9rem;
  font-weight: 500;
  line-height: 6.66rem;
`;

export default SearchBox;
