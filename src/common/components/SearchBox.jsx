import styled from 'styled-components';
import Salad from '../../AddMeal/components/SearchSec/imgs/salad.jpg';
import SearchButton from '../assets/imgs/SearchButton.svg?react';
import SearchReset from '../assets/imgs/SearchReset.svg?react';
import { useState, useRef, useEffect } from 'react';
import { css } from 'styled-components';
import SearchItem from '../../AddMeal/components/SearchSec/components/SearchItem';
import FoodWikiItem from '../../FoodWiki/components/FoodWiki/FoodWikiItem';

const SearchBox = ({ type }) => {
  // 검색어 관리
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText == '' && searchstate === true) {
      onSearchFalse();
    }
  }, [searchText]);

  // 검색 상태 관리
  const [searchstate, toggleSearchState] = useState(false);
  const searchInput = useRef(null);

  // 검색 버튼 클릭 => Wrapper이 알맞게 바뀜
  const onSearchBtnClick = () => {
    // API POST : 음식 검색
    if (searchText != '') {
      if (!searchstate) onSearchTrue();
      else onSearchFalse();
    } else {
      searchInput.current.focus();
    }
  };

  // 검색 상태 변경
  const onSearchTrue = () => {
    toggleSearchState(true); // reset 아이콘으로 바뀜
  };

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

        {/* {searchstate === true && type === 'SearchSection' ? (
          <SearchItem food_id="1" food_name="흰쌀밥" food_info="한 공기" addedState={false}></SearchItem>
        ) : (
          <></>
        )} */}
        {/* <SeachSection> searchState===false이고 API 결과가 있음 => 알맞게 아이템을 만들어서 해당 컴포넌트를 반환 (클릭 이벤트 필요) */}

        {searchstate === true && type === 'FoodWiki' ? (
          <FoodWikiItem food_id="1" food_name="사과"></FoodWikiItem>
        ) : (
          <></>
        )}
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

  z-index: 3;

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

// 햄버거, 감튀 요소의 position: absolute을 위해 존재하는 투명한 컨테이너 (z-index 사용을 위해서)
const TransparentWrapper = styled.div`
  width: 33.75rem;
  height: 3.375rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 2;
`;

const StyledSalad = styled.img`
  width: 6rem;
  height: 7rem;

  position: absolute;
  top: -170%;
  left: 83%; /* Adjust based on the position of the icon */
  z-index: 2;
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
