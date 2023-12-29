import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';

export default function A013() {
  const [value, setValue] = useState(new Date());

  const handleDayClick = (value) => {
    setValue(value);
  };

  return (
    <div>
      <h1> 달력 컨포넌트 - npm i react-calendar</h1>
      <Calendar
        onClickDay={handleDayClick}
        calendarType="US" // 일요일부터 시작하는 달력
      />
    </div>
  );
}

// npm 라이브러리 사용 - https://www.npmjs.com/package/react-calendar
// 위 주소는 typescript의 사례를 보여준다.
// npm i react-calendar

// css 커스텀 방법 -https://velog.io/@pikadev1771/react-calendar-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B8%B0-%EB%82%A0%EC%A7%9C-%EB%B3%80%ED%99%98-%ED%98%84%EC%9E%AC-%EB%8B%AC-%EA%B5%AC%ED%95%98%EA%B8%B0-%EC%BD%98%ED%85%90%EC%B8%A0-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0
