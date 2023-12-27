import axios from 'axios';
import { useState, useEffect } from 'react';

export default function A008() {
  const [data, setData] = useState(null);
  const [numOfRows, setNumOfRows] = useState(10); // 한 번에 불러올 자료의 개수

  useEffect(() => {
    // 서울 공원 정보 API
    // https://data.seoul.go.kr/dataList/OA-394/S/1/datasetView.do

    const fetchData = async () => {
      // 아래 서비스키는 강사의 키이므로 본인의 키로 변경해야 함
      const serviceKey = '4f4972456763617235345177776f79';
      const url = `http://openAPI.seoul.go.kr:8088/${serviceKey}/json/SearchParkInfoService/1/${numOfRows}/`;
      try {
        const response = await axios.get(url);
        setData(response.data.SearchParkInfoService.row);

        // 정보구조 참고
        // console.log(response.data.SearchParkInfoService.row);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [numOfRows]);

  return (
    <div className="box">
      <p>서울 공원 정보 API</p>
      {/* 버튼을 클릭하면 자료를 10개 씩 불러오기 */}
      <button onClick={() => setNumOfRows((prev) => prev + 10)}>
        10개 추가
      </button>

      <div>
        {data &&
          data.map((item) => (
            <div key={item.P_IDX}>
              <div>{item.P_IDX}</div>
              <div>{item.P_PARK}</div>
              <div>{item.P_LIST_CONTENT}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
