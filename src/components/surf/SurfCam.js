import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const SurfCam = ({ streamUrl }) => (
  <ReactPlayer
    url={streamUrl}
    playing={true}
    controls={true}
    muted={true}
    width={'100%'}
    height={'100%'}
  />
);

SurfCam.propTypes = {
  streamUrl: PropTypes.string.isRequired,
};

export default SurfCam;
