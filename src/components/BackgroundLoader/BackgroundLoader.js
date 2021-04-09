import React, { useEffect, useState, useRef } from 'react';
import Spinner from '../Spinner';
import background from '../../images/bg.jpg';

function BackgroundLoader({ children }) {
  const imgRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoading(false);
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
            onLoad={setIsLoading(false)}
            decoding="async"
          />
        )
      }
    </>
  )
}

export default BackgroundLoader;
