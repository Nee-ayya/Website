import React, { useEffect, useRef } from 'react';
import '../App.css';
import { Button } from './button';
import './Main.css';

function Main() {
  const videoRef = useRef(null)

    useEffect(() => {
        console.log("Main component rendered");
        const videoElement = document.querySelector('video');
        if (videoElement) {
          console.log("Video element found:", videoElement);
          videoElement.onloadeddata = () => {
            console.log("Video loaded successfully");
          };
          videoElement.onerror = (e) => {
            console.error("Error loading video:", e);
          };
        } else {
          console.error("Video element not found");
        }
      }, []);

        useEffect(() => {
          const videoElement = videoRef.current;
          if (videoElement) {
            console.log("Video element found:", videoElement);
            videoElement.play().catch((error) => {
              console.error('Error attempting to play', error);
            });
          }
        }, []);
  return (
    <div className='Main-container'>
      <video ref={videoRef} src='/videos/video-2.mp4' autoPlay loop muted />
      <h1> WELCOME TO MY PAGE! </h1>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Main;