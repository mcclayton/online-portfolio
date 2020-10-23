import React from 'react';
import PT from 'prop-types';

function Footer(props) {
  return (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/in/michaelcclayton/" className="icon fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/mcclayton" className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}

Footer.propTypes = {
  timeout: PT.bool
};

export default Footer;
