import axios from 'axios';
import { useState, useEffect } from 'react';

export default function A010() {
  const [data, setData] = useState(null);
  const [numOfRows, setNumOfRows] = useState(10); // 한 번에 불러올 자료의 개수

  // 영화정보 API

  // API 인증키는 개인이 발급 받아 변경
  const serviceKey = '2a890905-712d-4c6d-ae9d-e4249e31e8e5';

  const fetchData = async (value) => {
    const url = `http://api.kcisa.kr/openapi/service/rest/meta16/getkobis05?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=1`;
    try {
      const response = await axios.get(url);
      setData(response.data.response.body.items.item);
      // 정보구조 참고
      console.log(response.data.response.body.items.item);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [numOfRows]);

  return (
    <div className="box">
      <p>영화정보 API</p>
      {/* 버튼을 클릭하면 자료를 10개 씩 불러오기 */}

      <hr />
      <button onClick={() => setNumOfRows((prev) => prev + 10)}>
        10개 추가
      </button>
      <div>
        {data &&
          data.map((item, i) => (
            <div key={i}>
              <p>
                {item.title} <a href={item.url}>링크</a>
              </p>
              <p>{item.person}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
