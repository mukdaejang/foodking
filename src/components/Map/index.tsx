import { MapStyle } from './map.styled';
import { Fragment, useState, useEffect, useRef } from 'react';
import Modal from '@/components/Modal';
import MapModal from './mapModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface mapType {
  pos: number[];
}

const Map = ({ pos }: mapType) => {
  const { kakao }: any = window;
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMapModalOpen, setIsMapModalOpen] = useState<Boolean>(false);

  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(pos[0], pos[1]),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(pos[0], pos[1]);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    map.setDraggable(false);
    map.setZoomable(false);
    marker.setMap(map);
  }, []);

  const handleMapBigModal = () => {
    const isMapModalOpenState = isMapModalOpen;
    window.scrollTo(0, 0);
    setIsMapModalOpen(!isMapModalOpenState);
    document.body.style.overflow = !isMapModalOpenState ? 'hidden' : 'unset';
  };

  return (
    <Fragment>
      {isMapModalOpen && (
        <FontAwesomeIcon
          className="mapXIcon"
          icon={faXmark}
          size={'2x'}
          onClick={handleMapBigModal}
        />
      )}
      <MapStyle ref={mapRef} onClick={handleMapBigModal}></MapStyle>
      {isMapModalOpen && (
        <Modal closePortal={handleMapBigModal}>
          <MapModal pos={pos}></MapModal>
        </Modal>
      )}
    </Fragment>
  );
};

export default Map;
