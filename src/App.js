import React, { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState('');
  const [punchline, setPunchLine] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const [isPunchline, setIsPunchline] = useState(false);
  const [isError, setIsError] = useState(false);

  function showPunchline() {
    if (isPunchline === true) {
      setIsPunchline(false);
    } else if (isPunchline === false) {
      setIsPunchline(true);
    }
  }
  async function getRandomJoke() {
    setIsError(false);
    setIsLoading(true);
    try {
      let url =
        'https://thingproxy.freeboard.io/fetch/https://official-joke-api.appspot.com/jokes/random';
      let response = await fetch(url);
      let data = await response.json();

      setJoke(data.setup);
      setPunchLine(data.punchline);
      console.log(joke);
      console.log(punchline);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
  }

  useEffect(() => {
    getRandomJoke();
  }, []);
  return (
    <div className='container'>
      <header className='header'>
        <button onClick={getRandomJoke} className='header-btn'>
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
      <main className='main'>
        {isError && (
          <p className='error-text'>There was an error loading your joke.</p>
        )}
        {isloading && !isError && (
          <p className='loading-text'>Loading your joke...</p>
        )}
        {!isloading && (
          <div>
            <div className='joke-container'>
              <p className='joke'>{joke}</p>
            </div>
            <div className='punchline-btn-container'>
              <button onClick={showPunchline} className='punchline-btn'>
                Show Punchline
              </button>
            </div>
            <div className='punchline-text-container'>
              {isPunchline && <p className='punchline'>{punchline}</p>}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
