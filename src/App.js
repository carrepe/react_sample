import { Routes, Route } from 'react-router-dom';

import A001 from './sample/A001';
import A002 from './sample/A002';
import A003 from './sample/A003';
import A004 from './sample/A004';
import A005 from './sample/A005';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <a href="/A001">A001 - axios 활용하여 api 자료 불러오기 </a>
        <a href="/A002">A002_1 - 카카오지도 활용하기</a>
        <a href="/A005">A002_2 - 카카오지도에 마커 표시하기</a>
        <a href="/A003">A003 - useRef 사용법</a>
        <a href="/A004">A004 - Input 요소에 자동 포커스 - useRef활용</a>
      </nav>
      <Routes>
        <Route path="/A001" element={<A001 />} />
        <Route path="/A002" element={<A002 />} />
        <Route path="/A003" element={<A003 />} />
        <Route path="/A004" element={<A004 />} />
        <Route path="/A005" element={<A005 />} />
      </Routes>
    </div>
  );
}

export default App;
