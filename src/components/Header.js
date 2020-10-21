import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
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
        <Button
          onClick={() => {
            props.onOpenArticle('intro')
          }}
        >
          Intro
        </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </Button>
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
