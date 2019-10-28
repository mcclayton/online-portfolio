import React, { useEffect } from 'react'

const NotFoundPage = () => {
  useEffect(() => {
    const path = window.location.pathname;
    window.location = `https://www.zola.com/wedding/michael-elissa${path}`;
  }, []);

  return (<div />);
}

export default NotFoundPage
