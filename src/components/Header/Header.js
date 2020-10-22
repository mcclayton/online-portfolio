import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import InitialsLogo from '../InitialsLogo';
import portrait from '../../images/portrait.png';
import styles from './styles.module.scss';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <p>
          <InitialsLogo width="150px" />
          <h1>Michael C. Clayton</h1>
          <img src={portrait} alt="Portrait Avatar" className={styles.avatar} />
          <p>
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
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
