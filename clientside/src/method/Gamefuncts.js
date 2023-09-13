import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Gamefuncts() {
  const [purposeStatement, setPurposeStatement] = useState('');
  const [letters, setLetters] = useState([]);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [isGameWon, setIsGameWon] = useState(false);
  const [datas, setDatas] = useState(Array.from({ length: 10 }, () => '')); // Initialize datas as an array
  const [result,setResult]=useState('');
  // Fetch the purpose statement from the backend
  useEffect(() => {
    Axios.get('http://localhost:3001/api/purpose-statement')
      .then((response) => {
        setPurposeStatement(response.data.purposeStatement);
        setLetters(Array.from(response.data.purposeStatement));
      })
      .catch((error) => {
        console.error('Error fetching purpose statement:', error);
      });
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timer > 0 && !isGameWon) {
      const timerInterval = setInterval(() => {
        const tr=timer-1;
        setTimer(tr); // Use the function form of setTimer
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [timer, isGameWon]);

  // Handle letter input
  const handleLetterInput = (index, input) => {
    // Validate input and check if it's correct
    if (input === letters[index]) {
      // Update the datas array with the input value at the corresponding index
      setDatas((prevDatas) => {
        const updatedDatas = [...prevDatas];
        updatedDatas[index] = input;
        return updatedDatas;
      });

      // Update the letters array to mark the letter as correct
      const updatedLetters = [...letters];
      updatedLetters[index] = null; // Use null to represent filled and correct
      setLetters(updatedLetters);
    }
  };

  // Check if the game is won
  useEffect(() => {
    if (letters.every((letter) => letter === null)) {
      setIsGameWon(true);
    }
  }, [letters]);

  const SubmitGame = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:3001/api/submit_game', {
        datas: datas,
      });
      console.log("Submit Successful");
    } catch (err) {
      console.error("Error:", err);
    }
  
    // Handle game submission here
  };


  useEffect(() => {
    Axios.get('http://localhost:3001/api/result')
      .then((response) => {
        // Assuming the server responds with an object containing a 'data' property.
        const userData = response.data;
        console.log(userData);
        setResult(userData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Add an empty dependency array to run the effect once


  return (
    <div className="container mt-5 bg-dark text-white text-center">
      <h1 className="mb-3">Userfacet Statement</h1>
      <p>Time Left: {timer} seconds</p>
      <p>Purpose Statement: {purposeStatement}</p>
      <p>the above text shold be generate</p>

      <form onSubmit={SubmitGame}>
        <div className="row letter-grid">
          {letters.map((letter, index) => (
            <div key={index} className="col-1">
              <input
                type="text"
                maxLength="1"
                value={letter === null || (index % 7 === 0 || index % 5 === 0) ? '' : letter}
                onChange={(e) => handleLetterInput(index, e.target.value)}
                disabled={letter === null}
                className={`form-control text-center ${
                  letter === null ? 'is-valid' : 'bg-secondary text-white'
                }`}
              />
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
     
  
        <p className="mt-3 alert alert-success">result : {result.message}</p>
   
    </div>
  );
}
