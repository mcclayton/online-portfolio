import React from 'react';
import PT from 'prop-types';

function Footer({ timeout }) {
  return (
    <footer id="footer" style={timeout ? { display: 'none' } : {}}>
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
      View My Site's <a href="https://github.com/mcclayton/mcclayton.github.io">Source Code</a> 👨🏼‍💻
    </footer>
  );
}

Footer.propTypes = {
  timeout: PT.bool
};

export default Footer;
