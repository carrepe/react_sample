import { useEffect, useRef } from 'react';
export default function A002() {
  const mapRef = useRef(null);
  const setCenterRef = useRef(null);
  const panToRef = useRef(null);

  useEffect(() => {
    if (window.kakao && mapRef.current) {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapRef.current, options); // 지도 생성

      function setCenter() {
        var moveLatLon = new window.kakao.maps.LatLng(33.452613, 126.570888);
        map.setCenter(moveLatLon);
      }

      function panTo() {
        var moveLatLon = new window.kakao.maps.LatLng(33.45058, 126.574942);
        map.panTo(moveLatLon);
      }

      setCenterRef.current = setCenter;
      panToRef.current = panTo;
    }
  }, []);
  return (
    <div className="box">
      <div ref={mapRef} className="map">
        지도 지도
      </div>
      <button onClick={() => setCenterRef.current()}>setCenter</button>
      <button onClick={() => panToRef.current()}>panTo</button>
    </div>
  );
}
