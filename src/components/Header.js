import React, { useState } from 'react'
import PropTypes from 'prop-types'

const redirectToZola = () => {
  window.location = 'https://www.zola.com/wedding/michael-elissa/rsvp';
};

const RedirectionBody = () => (
  <h1>
    <span className="icon fa-heart" style={{ color: '#EC565A', fontSize: '15rem' }}></span>
  </h1>
);

const Body = ({ onRedirect }) => (
  <React.Fragment>
  <div className="logo">
    <span className="icon fa-heart"></span>
  </div>
  <div className="content">
    <div className="inner">
      <h1>Elissa & Michael</h1>
      <h2>March, 7 2020</h2>
      <h3>The Carousel House, Santa Barbara</h3>
      <button onClick={onRedirect}>
        <span className="icon fa-pencil" style={{ paddingRight: '1rem' }}></span>
        RSVP Form
      </button>
    </div>
  </div>
  </React.Fragment>
);

const Header = (props) => {
  const [state, setState] = useState({ redirecting: false });

  const redirect = () => {
    setState({ redirecting: true })
    redirectToZola();
  };

  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      {
        state.redirecting ? (<RedirectionBody />) : (
          <Body onRedirect={redirect} />
        )
      }
    </header>
  )
}

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
