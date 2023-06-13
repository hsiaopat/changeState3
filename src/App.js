import React, { useState } from 'react';
import './style.css';

export default function App() {
  //local
  const [fullName, setFullName] = useState({
    firstName: '',
    lastName: '',
  });

  //console.log(randomNumbers);

  //immutable way/React way
  // const addItem = () => {
  //   const randomNumber = Math.floor(Math.random() * 10) + 1;
  //   setRandomNumbers([...randomNumbers, randomNumber]);
  // };
  return (
    <div>
      <input
        onChange={(e) =>
          setFullName((f) => ({ ...f, firstName: e.target.value }))
        }
      ></input>
      <input
        onChange={(e) =>
          setFullName((f) => ({ ...f, lastName: e.target.value }))
        }
      ></input>
      <h2>
        Hi! {fullName.firstName} {fullName.lastName}
      </h2>
      {/* <button onClick={addItem}>Add a random number</button>
      <ul>
        {randomNumbers.map((num) => (
          <li>{num}</li>
        ))}
      </ul> */}
    </div>
  );
}
