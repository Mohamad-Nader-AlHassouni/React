import React, { useState } from 'react';

import Button from '../Button Component/Button'
import FriendProfile from './FriendProfile'

const Friend=() =>{
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [friend, setFriend] = useState(null);

  const getFriend = async () => {
    const url = 'https://www.randomuser.me/api'

    try {
      setLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setFriend({
          firstName: data.results[0].name.first,
          lastName: data.results[0].name.last,
          address: data.results[0].location.street.name,
          country: data.results[0].location.country,
          email: data.results[0].email,
          phone: data.results[0].cell,
        });

      } else {
        throw Error("something wrong happened!!");
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Ex1: New friend on demand</h1>
      <Button onClick={getFriend}>Get A Friend!</Button>
      {isLoading && <p>Loading ...</p>}
      {friend && !isLoading ? <FriendProfile friend={friend}/> : null}
      {error && <div>"something wrong happened!!"</div>}

    </div>
  );
}

export default Friend; 
