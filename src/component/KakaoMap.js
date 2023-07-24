import { useState } from "react";
import Maker from "../images/maker.png";
// import { Map, MapInfoWindow, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { styled } from "styled-components";


const {kakao} = window;

const Grid = styled.div`


`;

const KakaoMap = (props) => {

  // const {myLoca, leve, content} = props;
  
  // const locations = [
	// 	{ title: '로얄마카롱', latlng: { lat: 37.5022798575697, lng: 127.03549425626856 } },
	// 	{ title: '크리에잇 쿠키', latlng: { lat: 37.50292419145257, lng: 127.03511004160167 } },
	// 	{ title: '테이블스', latlng: { lat: 37.49811544220041, lng: 127.03384121820527 } },
	// 	{ title: '로흐', latlng: { lat: 37.50085501505924, lng: 127.03199624553372 } },
  //   { title: '트리오드', latlng: { lat: 37.49962351869158, lng: 127.02958126885545 } },
	// ];

  // const [selectedMarker, setSelectedMarker] = useState(false);

  //  // 마커를 클릭했을 때 처리하는 함수
  //  const handleMarkerClick = (marker) => {
  //   setSelectedMarker(marker);
  // };

  // // 정보 컴포넌트를 닫는 함수
  // const handleCloseInfoWindow = () => {
  //   setSelectedMarker(null);
  // };
  
  // const [isOpen, setIsOpen] = useState(false);

  return(
    <>
    </>
    // <>
    //  <Map  // 지도를 표시하는 Container
    //     center={{ lat: 37.49836350451894, lng: 127.0328292001705 }}   // 지도의 중심 좌표
    //     style={{ width: '100%', height: '500px' }} // 지도 크기
    //     level={4}                                   // 지도 확대 레벨
    //   >

    //     {locations.map((loc, idx) => (
    //     <MapMarker key={`${loc.title}-${loc.latlng}`}
		// 			position={{ lat: content.lat, lng: content.lng }} //  마커 & 인포윈도우가 표시될 위치 
    //       image={{
		// 				src: Maker,
		// 				size: { width: 35, height: 35 },
		// 			}}
		// 		title={loc.title}>
    //       {setIsOpen && (
    //         <CustomOverlayMap 
    //         position={selectedMarker.latlng}
    //         onClose={handleCloseInfoWindow} >
    //           <Grid>

    //           </Grid>
          
    //       </CustomOverlayMap>
    //       )}
    //     </MapMarker> 
    //       ))}
    //        {/* {selectedMarker && (
    //       <MapInfoWindow
    //         position={selectedMarker.latlng}
    //         options={{
    //           removable: true, // 이 옵션은 닫기 버튼을 추가할 경우 사용됩니다. 필요 없다면 제거하셔도 됩니다.
    //         }}
    //         onClose={handleCloseInfoWindow}
    //       >
    //       </MapInfoWindow>
    //     )} */}

    //   </Map>

    // </>
  );
};

export default KakaoMap;
