import { useState } from "react";
import Maker from "../images/maker.png";
import { Map, MapInfoWindow, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { styled } from "styled-components";


const {kakao} = window;

const Grid = styled.div`


`;


const KakaoMap = (props) => {

 

  const locations = [
    { title: '로얄마카롱', latlng: {lat: 37.5022798575697, lng: 127.03549425626856 }},
    { title: '크리에잇 쿠키', latlng: {lat: 37.50292419145257, lng: 127.03511004160167 }},
    { title: '테이블스',  latlng: {lat: 37.49811544220041, lng: 127.03384121820527 }},
    { title: '로흐',  latlng: {lat: 37.50085501505924, lng: 127.03199624553372 }},
    { title: '트리오드',  latlng:{lat: 37.49962351869158, lng: 127.02958126885545 }},
  ];

  
  // const map = useMap()

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMarker, setSeleteMarker] = useState();


  // const isOpen = (index) => {
  //   setSeleteMarker(index);
  //   isClicked(selectedMarker === index);
  // }

  return(
    <>
     <Map  // 지도를 표시하는 Container
        center={{ lat: 37.49836350451894, lng: 127.0328292001705 }}   // 지도의 중심 좌표
        style={{ width: '100%', height: '500px' }} // 지도 크기
        level={4}                                   // 지도 확대 레벨
      >

        {locations.map((loc, index) => ( // 여러개 마커 표시
        <MapMarker // 마커 생성하고 지도에 표시
        key={index}
        position={loc.latlng} // 마커를 표시할 위치
        image={{
          src: Maker,
          size: { width: 35, height: 35 },
        }}
        // onClick={() => isOpen(index)}
        >

     { isOpen &&  (
      <CustomOverlayMap	// 커스텀 오버레이를 표시할 Container

          	position={loc.latlng}	// 커스텀 오버레이가 표시될 위치
          	
		>
    		<Grid>
         		... 
         	</Grid>
     	</CustomOverlayMap>
	)}
        </MapMarker>
        ))}



      </Map>

    </>
  );
};

export default KakaoMap;
