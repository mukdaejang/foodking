import styled from '@emotion/styled';

const MapStyle = styled.div`
  width: 350px;
  height: 350px;

  & > div {
    cursor: pointer !important;
  }
`;

const MapModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 80vh;
  z-index: 10000;
`;

export { MapStyle, MapModalStyle };
