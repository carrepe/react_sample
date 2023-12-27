import React, { useState, useEffect } from 'react';
export default function A011() {
  // 샘플 데이터
  let totalData = [
    {
      id: '1',
      category: '뮤지컬',
      title: '스쿨 오브 락',
      startDate: '2023-12-25',
      endDate: '2024-03-24',
      place: '오페라극장',
      image: 'image1.jpg',
      count: '47',
    },
    {
      id: '2',
      category: '발레',
      title: '백조의 호수',
      startDate: '2023-12-29',
      endDate: '2023-06-11',
      place: '오페라극장',
      image: 'image2.jpg',
      count: '150',
    },
    {
      id: '3',
      category: '오페라',
      title: '투란도트',
      startDate: '2023-12-30',
      endDate: '2023-08-20',
      place: '오페라극장',
      image: 'image3.jpg',
      anniversary: '기획',
      count: '115',
    },
    {
      id: '4',
      category: '오페라',
      title: '서부의 아가씨',
      startDate: '2024-12-05',
      endDate: '2024-12-08',
      place: '오페라극장',
      image: 'image4.jpg',
      count: '53',
    },
    {
      id: '5',
      category: '뮤지컬',
      title: '일 테노레 (IL TENORE)',
      startDate: '2023-12-19',
      endDate: '2024-02-25',
      place: 'CJ 토월극장',
      image: 'image5.jpg',
      count: '29',
    },
    {
      id: '6',
      category: '연극',
      title: '폴리팝(두들팝ver.2)',
      startDate: '2023-12-21',
      endDate: '2024-01-21',
      place: '자유소극장',
      image: 'image6.jpg',
      count: '105',
    },
    {
      id: '7',
      category: '오페라',
      title: '탄호이저',
      startDate: '2024-10-17',
      endDate: '2024-10-20',
      place: '오페라극장',
      image: 'image7.jpg',
      count: '202',
    },
    {
      id: '8',
      category: '전시',
      title: '빅토르 바자렐리 : 반응하는 눈',
      startDate: '2023-12-21',
      endDate: '2024-04-21',
      place: '한가람미술관 제1전시실',
      image: 'image8.jpg',
      count: '97',
    },
    {
      id: '9',
      category: '전시',
      title: '에드바르드 뭉크',
      startDate: '2024-05-22',
      endDate: '2024-09-19',
      place: '한가람미술관 제1전시실',
      image: 'image9.jpg',
      count: '86',
    },
    {
      id: '10',
      category: '전시',
      title: '에르베 튈레展 색색깔깔 뮤지엄',
      startDate: '2023-11-03',
      endDate: '2024-03-03',
      place: '한가람미술관 제3전시실',
      image: 'image10.jpg',
      count: '55',
    },
    {
      id: '11',
      category: '전시',
      title: '아야코 록카쿠, 꿈꾸는 손',
      startDate: '2023-12-02',
      endDate: '2024-03-24',
      place: '한가람미술관 제5전시실',
      image: 'image11.jpg',
      count: '94',
    },
  ];

  const [week, setWeek] = useState([]);
  useEffect(() => {
    const currentDate = new Date();
    const weekStart =
      currentDate.getDate() -
      currentDate.getDay() +
      (currentDate.getDay() === 0 ? -6 : 1); // 일요일이면 -6, 아니면 1
    let week = [];

    for (let i = 0; i < 7; i++) {
      let day = new Date(currentDate.setDate(weekStart + i)); // 일주일 날짜 구하기
      week.push(day.toISOString().split('T')[0]); // 날짜를 YYYY-MM-DD 형식으로 변환
    }

    setWeek(week);
  }, []);

  const matchingData = totalData.filter((item) =>
    week.includes(item.startDate)
  );
  console.log(matchingData);

  return (
    <div className="box">
      <p>1. 현재 날짜를 기준으로 주간 날자 정보 가져오기 - week </p>
      <p>
        2. api 데이터 중 startDate 날짜 정보를 활용하여 week 배열과 일치하는
        데이터를 새로운 배열로 - matchingData
      </p>
      <p>예- 오늘이 27일이라면 27일이 속한 주에 시작되는 공연 정보를 나열</p>
      <hr />
      <div>
        <h2>이번 주 날자</h2>
        {week.map((day, index) => (
          <span key={index}> {day} &nbsp; </span>
        ))}
      </div>
      <hr />
      <div>
        <h2>이번 주 공연</h2>
        {matchingData.map((item, i) => (
          <div key={i}>
            <p>{item.title}</p>
            <p>{item.startDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
