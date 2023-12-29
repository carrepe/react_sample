import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
  const [searchData, setSearchData] = useState([]);
  const [inputText, setInputText] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const [totalCount, setTotalCount] = useState(0); // 전체 자료의 개수
  const search_url =
    'http://openapi.foodsafetykorea.go.kr/api/feee4a19d6674a738515/I1590/json/1/30';

  const searchFunc = async () => {
    const response = await axios.get(search_url);
    setSearchData(response.data.I1590.row);
    setTotalCount(response.data.I1590.total_count);
  };

  const getValue = (e) => {
    setInputText(e.target.value);
  };

  const handleSearch = () => {
    setFilteredData(
      searchData.filter((item) => item.BSSH_NM.includes(inputText))
    );
  };

  useEffect(() => {
    searchFunc();
  }, []);

  return (
    <div className="box">
      <p>
        식품모범음식점 API |{' '}
        <span>{Number(totalCount).toLocaleString()}개 상점</span>
      </p>
      <input type="text" value={inputText} onChange={getValue} />
      <hr />
      <button onClick={handleSearch}>검색</button>
      <div>
        {(filteredData || searchData).map((item, i) => (
          <div key={i}>
            <p>{item.LCNS_NO}</p>
            <p>{item.BSSH_NM}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
