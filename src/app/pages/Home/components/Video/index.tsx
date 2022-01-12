import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Loading from '../Loading';
const StyledLoadingProgress = styled(Loading)`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #000;
  padding: 10px;
  border-radius: 10px;
`;
interface VideoProps {
  linkVideo: string | undefined;
  radius?: string | number | undefined;
  shadow?: boolean | undefined;
}
export const Video = ({ linkVideo, radius, shadow }: VideoProps) => {
  const videoRef = useRef<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [isTurnOnSound, setIsTurnOnSound] = useState(true);
  const [isControls, setIsControls] = useState(false);
  const ios =
    !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  const handleClickFullscreen = () => {
    const videoElement = videoRef.current;
    if (videoElement.requestFullscreen) videoElement.requestFullscreen();
    else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitEnterFullScreen();
    } else if (ios) {
      videoElement.webkitEnterFullScreen();
    } else if (videoElement.msRequestFullscreen)
      videoElement.msRequestFullscreen();
  };
  useEffect(() => {
    videoRef.current?.addEventListener('contextmenu', (e: any) => {
      // e.preventDefault();
    });
    if (window.innerWidth < 576) {
      setIsControls(true);
    }
  }, []);
  return (
    <Div shadow={shadow ? 1 : 0} radius={radius}>
      {isLoading && <StyledLoadingProgress done={100} />}
      <video
        ref={videoRef}
        width={isLoading ? '0' : '100%'}
        height={isLoading ? '0' : '100%'}
        autoPlay
        controls={isControls}
        loop
        muted={isTurnOnSound}
        playsInline
        preload="auto"
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onCanPlay={() => {
          const delay = setTimeout(() => {
            setIsLoading(false);
          }, 3000);
          !isLoading && clearTimeout(delay);
        }}
      >
        <source
          // src="https://defiforyou.mypinata.cloud/ipfs/QmWAkpPw3fstuK3F7UjuAQ1YEHamftzB82nVnv7UtnQAoQ"
          src={linkVideo}
          type="video/mp4"
        />
      </video>
      {!isLoading && !isControls && (
        <>
          <StyledIconSound onClick={() => setIsTurnOnSound(!isTurnOnSound)}>
            {isTurnOnSound ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </StyledIconSound>
          <StyledIconFullscreen onClick={handleClickFullscreen}>
            <FullscreenIcon />
          </StyledIconFullscreen>
        </>
      )}
    </Div>
  );
};
export default Video;

const Div = styled.div<{ shadow: number; radius: string | number | undefined }>`
  width: 100%;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 93px;
  border-radius: ${props => (props.radius ? props.radius : 0)}px;

  & video {
    border-radius: ${props => (props.radius ? props.radius : 0)}px;
    box-shadow: ${props =>
      props.shadow === 1
        ? '0px 0px 8px #f8f8f8, 0px 0px 24px #db5289, 0px 0px 15px #e7e5ec, inset 0px 0px 5px #dadada'
        : 'unset'};
  }
  /* background-color: #05080a; */
  @media screen and (min-width: 576px) {
    & video {
      &::-webkit-media-controls-volume-slider {
        display: none;
      }

      &::-webkit-media-controls-mute-button {
        display: none;
      }
    }
  }
`;
const StyledIconSound = styled.div`
  position: absolute;
  right: 20px;
  top: 120px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
const StyledIconFullscreen = styled.div`
  position: absolute;
  right: 20px;
  bottom: 10px;
  color: white;
  & svg {
    font-size: 40px;
  }
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 576px) {
    & svg {
      font-size: 20px;
    }
  }
`;
