import PropTypes from 'prop-types';
import React from 'react';
import mccPath from '../images/mcc.png';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <p>
          <img src={mccPath} alt="MCC Initials" width="150px" />
          <h1>Michael C. Clayton</h1>
          <p style={{ borderLeft: 'solid 3px rgba(40,45,40,30)', paddingLeft: '10px' }}>
            "If you don’t work on important problems, it’s not likely that you’ll do important work." —Richard Hamming
          </p>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
