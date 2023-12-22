import axios from 'axios';
import { useState, useEffect } from 'react';

export default function A001() {
  const [data, setData] = useState(null);
  const [numOfRows, setNumOfRows] = useState(10); // 한 번에 불러올 자료의 개수

  useEffect(() => {
    // api URL 내부에 numOfRows를 넣어서 요청
    axios
      .get(
        `http://api.kcisa.kr/openapi/API_CCA_142/request?serviceKey=0f2e0f00-9bc3-483a-9ef2-4f81d6d89ec3&numOfRows=${numOfRows}&pageNo=1&infoTp=026`
      )
      .then((res) => {
        setData(res.data.response.body.items.item);
        // 아래 콘솔을 확인해서 데이터 전체 구조 확인 후 사용
        // console.log(res);
      });
  }, [numOfRows]);

  return (
    <div className="box">
      {/* 버튼을 클릭하면 자료를 10개 씩 불러오기 */}
      <button onClick={() => setNumOfRows((prev) => prev + 10)}>10개</button>
      {data &&
        data.map((list, i) => (
          <p key={i}>
            {list.title} / <a href={list.url}>링크</a>
          </p>
        ))}
    </div>
  );
}
