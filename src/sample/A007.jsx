import axios from 'axios';
import { useState, useEffect } from 'react';

export default function A007() {
  const [data, setData] = useState(null);
  const [numOfRows, setNumOfRows] = useState(10); // 한 번에 불러올 자료의 개수

  useEffect(() => {
    // 국립중앙박물관 유물정보 API
    // https://www.culture.go.kr/data/openapi/openapiView.do?id=551&category=B&gubun=A
    // http://api.kcisa.kr/API_CNV_048/request?serviceKey=95aefb6e-b0c5-4027-a423-42013adf2cd0&numOfRows=10&pageNo=1
    const serviceKey = '95aefb6e-b0c5-4027-a423-42013adf2cd0';

    axios
      .get(
        `http://api.kcisa.kr/API_CNV_048/request?serviceKey=${serviceKey}&numOfRows=${numOfRows}&pageNo=1`
      )
      .then((res) => {
        setData(res.data.response.body.items.item);
        // 아래 콘솔을 확인해서 데이터 전체 구조 확인 후 사용
        console.log(res.data.response.body.items.item);
      });
  }, [numOfRows]);

  return (
    <div className="box">
      <p>국립중앙박물관 유물정보 API</p>
      {/* 버튼을 클릭하면 자료를 10개 씩 불러오기 */}
      <button onClick={() => setNumOfRows((prev) => prev + 10)}>
        10개 추가
      </button>
      {data &&
        data.map((list, i) => (
          <p key={i}>
            {list.title} / <a href={list.url}>링크</a>
            <img
              src={`https://${list.imageObject}`}
              alt=""
              width={50}
              height={50}
            />
          </p>
        ))}
    </div>
  );
}
