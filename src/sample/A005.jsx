import { useRef, useEffect } from 'react';

export default function A005() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.kakao && mapRef.current) {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapRef.current, options); // 지도 생성

      // 지도를 클릭한 위치에 표출할 마커입니다
      var marker = new window.kakao.maps.Marker({
        position: map.getCenter(),
      });
      marker.setMap(map);

      window.kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        var latlng = mouseEvent.latLng;
        marker.setPosition(latlng);
        var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
        message += '경도는 ' + latlng.getLng() + ' 입니다';
        var resultDiv = document.getElementById('clickLatlng');
        resultDiv.innerHTML = message;
      });
    }
  }, [mapRef]);

  return (
    <div className="box">
      <div ref={mapRef} className="map">
        지도 지도
      </div>
      <div id="clickLatlng"></div>
    </div>
  );
}
