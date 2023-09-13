import React from 'react';

export default function About() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Full Stack Development Assessment</h1>
      <h2>Game Concept:</h2>
      <p>
        A crossword puzzle game which consists of blocks of letters forming a
        purpose statement. Few of the letters will be prefilled. The player has
        to fill the remaining letters to form the purpose statement.
      </p>

      <h2>Objective:</h2>
      <p>
        Form the following purpose statement by filling in the purpose statement
        character by character.
      </p>
      <p>
        “We design and develop applications that run the world and showcase the
        future”
      </p>

      <h2>Gameplay Mechanics:</h2>
      <ul>
        <li>
          Each block contains a letter from the purpose statement.
        </li>
        <li>
          The blocks are of three types:
          <ul>
            <li>Editable and empty blocks where the user can fill up the letters.</li>
            <li>Uneditable prefilled blocks.</li>
            <li>Empty non-editable blocks resembling whitespaces of the purpose statement.</li>
          </ul>
        </li>
        <li>
          On entering a letter in the block, it would turn green indicating the player has filled the correct letter or would turn red, indicating that the filled letter is incorrect.
        </li>
        <li>
          The game gets over in 2 cases:
          <ul>
            <li>When the player fills up all the empty blocks with correct letters.</li>
            <li>When the timer gets over. Game time is 5 minutes. The timer decrements every second.</li>
          </ul>
        </li>
        <li>
          The interface should be responsive for desktop, iPad, and mobile.
        </li>
      </ul>

      <h2>Winning Logic:</h2>
      <p>
        The player should complete the game in less than 3 minutes. This logic should be calculated at the backend.
      </p>

      <h2>Visual Guide:</h2>
      <p>
        Web-based game compatible with desktop browsers. The interface should be clean and simple, ensuring the application works well with cross browsers. The playing board should be wide enough to accommodate 10 letters or more (refer design).
      </p>

      <h2>Game Flow:</h2>
      <ul>
        <li>
          In "Purpose Statement", the player forms the purpose statement by filling blocks. The timer countdown starts as soon as the user starts the game. The player starts filling up the purpose statement.
        </li>
        <li>
          The game can be submitted at any point of time in the 5-minute time duration. The game will be auto submitted once the timer gets over.
        </li>
        <li>
          On typing a letter, the next editable block should be auto focused to enter the next letter. The color of the letter should change to green or red based on the letter entered. (Green if the correct letter is entered and red if the wrong letter is entered).
        </li>
        <li>
          On clicking the “Submit” button, the score and time taken to submit the game should be passed, and based on backend response, the player should be declared as a winner.
        </li>
      </ul>

      <h2>Backend Development Requirements:</h2>
      <ul>
        <li>
          Take this JSON containing a list of users with emails and passwords. Create an API to login to the application and allow a user with credentials that match any one set of credentials in the given JSON to login to the application.
        </li>
        <li>
          Create an API Endpoint to be used by frontend to retrieve the sentence that is mentioned above.
        </li>
        <li>
          Create another API Endpoint to be used by frontend to determine if a person won a game. Take care of the following requirements:
          <ul>
            <li>Make sure that only a logged-in user can submit their attempt at a game.</li>
            <li>Limit one user to win only 1 time per hour.</li>
            <li>Any user who won a game in the current hour should result in a lost game, even if they submit a successful attempt in that hour.</li>
            <li>In any one hour, only two unique users can win the game.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
