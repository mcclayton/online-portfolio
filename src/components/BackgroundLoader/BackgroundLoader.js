import React, { useEffect, useState, useRef } from 'react';
import Spinner from '../Spinner';
import background from '../../images/bg.jpg';

const MIN_DELAY = 200;

function BackgroundLoader({ children }) {
  const imgRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  function finishLoading() {
    setTimeout(() => setIsLoading(false), Math.floor(Math.random() * (MIN_DELAY * 2)) + MIN_DELAY);
  }

  useEffect(() => {
    if (imgRef.current?.complete) {
      finishLoading();
    }
  }, []);

  return (
    <>
      { isLoading && (<Spinner label="Loading..." />) }
      {children({ isLoading })}
      { !isLoading && (<div id="bg" />) }
      {
        isLoading && (
          <img
            style={{ display: 'none' }}
            ref={imgRef}
            src={background}
            onLoad={finishLoading}
            decoding="async"
          />
        )
      }
    </>
  )
}

export default BackgroundLoader;
