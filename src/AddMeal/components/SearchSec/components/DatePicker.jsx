import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { styled, css } from 'styled-components';
import { forwardRef } from 'react';
import '../styles/Datepicker.css';
import { ko } from 'date-fns/locale';

const Datepicker = () => {
  // default 값: 현재 날짜
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick, className }, ref) => (
    <CustomInputBtn className={className} onClick={onClick} ref={ref}>
      {value}
    </CustomInputBtn>
  ));

  return (
    <>
      <AddMealWrapper $type="AddMeal">
        <CustomDatePicker
          locale={ko}
          dateFormat=" M / d" /* 버튼에 명시되는 날짜 형식 커스텀*/
          selected={startDate} /* default 선택된 date 값*/
          onChange={date => setStartDate(date)} /* 날짜 선택 이벤트 */
          popperPlacement="bottom"
          customInput={<CustomInput className="customInput" />} /* input 디자인을 커스텀 */
        />{' '}
      </AddMealWrapper>
    </>
  );
};

const AddMealWrapper = styled.div`
  width: 4.5rem;
  height: 2.5rem;
  background-color: #ebeeff;
  text-align: center;

  box-shadow: 0px 2px 2px 2px #d7ddff;
`;

const CustomInputBtn = styled.button`
  outline: none;
  border: none;

  background: #f0f1f5;
`;

const CustomDatePicker = styled(DatePicker)`
  width: 4.5rem;
  height: 2.5rem;

  background-color: #ebeeff;
  box-sizing: border-box;
  border-radius: 0.625rem;
  border: none;

  color: #414141;
  font-family: 'Segoe UI';
  font-size: 1.22rem;
  font-weight: 600;
  letter-spacing: 0.03rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  cursor: pointer;
`;
export default Datepicker;
