import styled from 'styled-components';
import SearchBox from '../../../common/components/SearchBox';

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
        <SearchBox type="SearchSection"></SearchBox>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  width: 100%;
  height: 8.3rem;
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

  font-size: 1.3rem;
  font-weight: 600;
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

  font-size: 1.3rem;
  font-weight: 600;

  opacity: var(--sds-size-stroke-border);
  background: #ebeeff;

  text-align: center;
  line-height: 2rem;
`;

export default SearchSection;
