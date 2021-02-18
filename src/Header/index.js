import React from 'react';

function Header(props) {
  return (
    <>
      <header className='header'>
        <button onClick={props.getRandomJoke} className='header-btn'>
          Get a New Random Joke
        </button>
        <a
          className='header-link'
          href='https://github.com/15Dkatz/official_joke_api '
          target='blank'
        >
          View API Docs
        </a>
      </header>
      <div className='divider'></div>
    </>
  );
}

export default Header;
