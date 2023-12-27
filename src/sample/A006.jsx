import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function A006() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // https://www.sysnet.pe.kr/2/0/12779 해당 API 활용방법을 구체적으로 설명해 놓았음
        // 아래는 강사의 키 이므로 본인의 키로 변경해야 함
        // 일반 인증키 (Encoding)
        // uzVV%2FZxdGeT24NnP6EkvACy8CdXrKcF66Dtd79d4T104hPNeMUT%2F2Dn66VhD66vQLNkfZEIRSLFCX9YsRHkL%2Fg%3D%3D
        // 일반 인증키 (Decoding)
        // uzVV/ZxdGeT24NnP6EkvACy8CdXrKcF66Dtd79d4T104hPNeMUT/2Dn66VhD66vQLNkfZEIRSLFCX9YsRHkL/g==

        const serviceKey =
          'uzVV%2FZxdGeT24NnP6EkvACy8CdXrKcF66Dtd79d4T104hPNeMUT%2F2Dn66VhD66vQLNkfZEIRSLFCX9YsRHkL%2Fg%3D%3D';
        const busRouteId = '100100578';
        const url = `/rest/arrive/getArrInfoByRouteAll?serviceKey=${serviceKey}&busRouteId=${busRouteId}`;

        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;
  if (!data) return null;

  return <div>{data}</div>;
}
