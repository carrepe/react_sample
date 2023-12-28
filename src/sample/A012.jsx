import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function A012() {
  const [data, setData] = useState(null);
  const [numOfRows, setNumOfRows] = useState(10); // 한 번에 불러올 자료의 개수
  const [pageNo, setPageNo] = useState(1); // 페이지 번호

  // 올림픽공원도서정보 API

  // API 인증키는 개인이 발급 받아 변경
  const serviceKey = 'a76c0ea3-a0bc-476e-80cb-fb157ac0f531';

  const fetchData = async () => {
    const url = `http://api.kcisa.kr/openapi/service/rest/meta2018/getKSCD0820181?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=${pageNo}`;
    try {
      const response = await axios.get(url);
      setData(response.data.response.body.items.item);
      // console.log(response.data.response.body.items.item);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [numOfRows]);

  return (
    <div className="box">
      <h1>도서정보</h1>
      {data.map((list, i) => (
        <div key={i}>
          <p>{list.localId}</p>
          <p>{list.title}</p>
          <p>{list.rights}</p>
          <p>{list.subDescription}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
