import { Routes, Route } from 'react-router-dom';

import A001 from './sample/A001';
import A002 from './sample/A002';
import A003 from './sample/A003';
import A004 from './sample/A004';
import A005 from './sample/A005';
import A007 from './sample/A007';
import A008 from './sample/A008';
import A009 from './sample/A009';
import A010 from './sample/A010';
import A011 from './sample/A011';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <a href="/A001">A001 - axios 활용하여 api 자료 불러오기 </a>
        <a href="/A002">A002_1 - 카카오지도 활용하기</a>
        <a href="/A005">A005 - 카카오지도에 마커 표시하기</a>
        <a href="/A003">A003 - useRef 사용법</a>
        <a href="/A004">A004 - Input 요소에 자동 포커스 - useRef활용</a>
        <a href="/A007">
          A007 - axios 활용하여 api 자료 불러오기 - 국립중앙박물관 유물정보 API
        </a>
        <a href="/A008">
          A008 - axios 활용하여 api 자료 불러오기 - 서울 공원 정보 API
        </a>
        <a href="/A009">
          A009 - axios 활용하여 api 자료 불러오기 - 식품모범음식점 API
        </a>
        <a href="/A010">
          A010 - axios 활용하여 api 자료 불러오기 - 영화정보 API
        </a>
        <a href="/A011">A011 - 날자활용 </a>
      </nav>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/A001" element={<A001 />} />
        <Route path="/A002" element={<A002 />} />
        <Route path="/A003" element={<A003 />} />
        <Route path="/A004" element={<A004 />} />
        <Route path="/A005" element={<A005 />} />
        <Route path="/A007" element={<A007 />} />
        <Route path="/A008" element={<A008 />} />
        <Route path="/A009" element={<A009 />} />
        <Route path="/A010" element={<A010 />} />
        <Route path="/A011" element={<A011 />} />
      </Routes>
    </div>
  );
}

export default App;
