import styled from 'styled-components';
import SearchBox from './components/SearchBox';

const SearchSection = () => {
  let today = new Date();

  return (
    <>
      <PageBackground>
        <Info>
          오늘{' '}
          <TodayDate>
            {today.getMonth() + 1}/{today.getDate()}
          </TodayDate>
          에 먹은 음식을 추가해주세요!
        </Info>
        <SearchBox></SearchBox>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  width: 100%;
  height: 23%;
  flex-shrink: 0;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Info = styled.div`
  color: #414141;

  /* Pretendard/B/24 */
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
`;

const TodayDate = styled.div`
  width: 4rem;
  height: 2rem;
  flex-shrink: 0;

  color: #3053f9;
  /* Pretendard/B/24 */
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  border-radius: 1.875rem;
  opacity: var(--sds-size-stroke-border);
  background: #ebeeff;

  text-align: center;
  line-height: 2rem;
`;

export default SearchSection;
