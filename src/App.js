import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  const [joke, setJoke] = useState('');
  const [punchline, setPunchLine] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isPunchline, setIsPunchline] = useState(false);
  async function getRandomJoke() {
    setIsError(false);
    setIsLoading(true);
    try {
      let url = 'https://official-joke-api.appspot.com/jokes/random';
      let response = await fetch(url);
      let data = await response.json();
      setJoke(data.setup);
      setPunchLine(data.punchline);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
  }

  return (
    <div className='container'>
      <Header getRandomJoke={getRandomJoke} />
      <Main
        joke={joke}
        punchline={punchline}
        isLoading={isLoading}
        isError={isError}
        isPunchline={isPunchline}
        setPunchLine={setPunchLine}
        getRandomJoke={getRandomJoke}
        setIsPunchline={setIsPunchline}
      />
    </div>
  );
}

export default App;
