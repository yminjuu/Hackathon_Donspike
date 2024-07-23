import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const Datepicker = () => {
  // default 값: 현재 날짜
  const [startDate, setStartDate] = useState(new Date());

  return <DatePicker selected={startDate} onChange={date => setStartDate(date)} />;
};

export default Datepicker;
