import React from 'react';
import PT from 'prop-types';

function Footer(props) {
  return (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
      Michael Clayton
    </footer>
  );
}

Footer.propTypes = {
  timeout: PT.bool
};

export default Footer;
