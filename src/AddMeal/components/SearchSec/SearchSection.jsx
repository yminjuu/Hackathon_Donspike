import styled from 'styled-components';
import SearchBox from '../../../common/components/SearchBox';
import Datepicker from '../SearchSec/components/DatePicker';

const SearchSection = ({ setSelectedDate, fetchMeal }) => {
  const onDateChange = startDate => {
    console.log(startDate);
    setSelectedDate(startDate);
  };

  return (
    <>
      <PageBackground>
        <Info>
          <TodayDate>
            <Datepicker onClick={onDateChange} className="datepicker" type="AddMeal" />
          </TodayDate>
          에 먹은 음식을 추가해주세요!
        </Info>
        <SearchBox type="SearchSection" fetchMeal={fetchMeal}></SearchBox>
      </PageBackground>
    </>
  );
};

const PageBackground = styled.div`
  width: 100%;
  height: 8.3rem;
  padding-top: 1rem;
  flex-shrink: 0;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  position: relative;
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

  position: absolute;
  top: -10%;
  z-index: 3;
`;

const TodayDate = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;
  flex-shrink: 0;

  /* Pretendard/B/24 */

  font-size: 1.3rem;
  font-weight: 600;

  opacity: var(--sds-size-stroke-border);
  background: #ebeeff;

  text-align: center;
  line-height: 2rem;
`;

export default SearchSection;
