import axios from 'axios';
import { useState, useEffect } from 'react';

export default function A009() {
  const [data, setData] = useState(null);
  const [numOfRows, setNumOfRows] = useState(10); // 한 번에 불러올 자료의 개수

  // 식품모범음식점 API
  // https://www.foodsafetykorea.go.kr/api/openApiInfo.do?menu_grp=MENU_GRP31&menu_no=656&show_cnt=10&start_idx=1&svc_no=I1590&svc_type_cd=API_TYPE06
  // 공공데이터 활용 이용방법 읽어보세요
  // https://www.foodsafetykorea.go.kr/api/howToUseApi.do?menu_grp=MENU_GRP34&menu_no=687
  // http://openapi.foodsafetykorea.go.kr/api/본인인증키/서비스아이디/파일형식(json)/시작행번호(숫자)/종료행번호(숫자)/

  const fetchData = async (value) => {
    const url = `http://openapi.foodsafetykorea.go.kr/api/feee4a19d6674a738515/I1590/json/1/${numOfRows}`;
    try {
      const response = await axios.get(url);
      setData(response.data.I1590.row);
      // 정보구조 참고
      console.log(response.data.I1590.row);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [numOfRows]);

  return (
    <div className="box">
      <p>식품모범음식점 API</p>
      {/* 버튼을 클릭하면 자료를 10개 씩 불러오기 */}

      <hr />
      <button onClick={() => setNumOfRows((prev) => prev + 10)}>
        10개 추가
      </button>
      <div>
        {data &&
          data.map((item, i) => (
            <div key={i}>
              <p>{item.LCNS_NO}</p>
              <p>{item.BSSH_NM}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
