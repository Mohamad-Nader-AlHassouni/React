import React, { useState, useEffect } from 'react'

import Button from '../Button Component/Button'
import Joke from './Joke'

const RandomJoke = () => {
    const [joke, setJoke] = useState ({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [click, setClick] = useState(0);

  useEffect( () => { 
    const getJoke = async () => {
      const url = "https://official-joke-api.appspot.com/random_joke";
      setIsLoading(true);
      const res = await fetch(url);
      if (res.status !== 200) {
        setError(true);
      } else {
        const data = await res.json();
        setJoke(data); 
        setIsLoading(false);
      }
    };
    getJoke();
   }, [click]);

    return (
    <div>
      <h1>Ex3: Random Joke Generator</h1>
      <Button onClick={() => setClick (click+1)}>Get A New Joke!</Button>
      {isLoading && <p>Loading ...</p>}
      {joke && !isLoading ? <Joke joke={joke} /> : null}
      {error && <div>"something wrong happened!!"</div>}
    </div>
    )
};

export default RandomJoke;