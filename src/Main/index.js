import React, { useEffect } from 'react';

function Main({
  joke,
  punchline,
  isLoading,
  isError,
  getRandomJoke,
  isPunchline,
  setIsPunchline,
}) {
  function showPunchline() {
    if (isPunchline === true) {
      setIsPunchline(false);
    } else if (isPunchline === false) {
      setIsPunchline(true);
    }
  }

  useEffect(() => {
    getRandomJoke();
  }, []);
  return (
    <main className='main'>
      {isError && (
        <p className='error-text'>There was an error loading your joke.</p>
      )}
      {isLoading && !isError && (
        <p className='loading-text'>Loading your joke...</p>
      )}
      {!isLoading && (
        <div>
          <div className='joke-container'>
            <p className='joke'>{joke}</p>
          </div>
          <div className='punchline-btn-container'>
            <button onClick={showPunchline} className='punchline-btn'>
              {isPunchline ? <span>Hide</span> : <span>Show</span>} Punchline
            </button>
          </div>
          <div className='punchline-text-container'>
            {isPunchline && <p className='punchline'>{punchline}</p>}
          </div>
        </div>
      )}
    </main>
  );
}

export default Main;
