const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3001; // Use the PORT environment variable if available

dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to parse JSON requests
app.use(express.json());

// Dummy user data for authentication
let users = [];

// Initialize gameState
const gameState = { purposeStatement: 'The game will be auto submitted once the timer gets over. ' };

// Read user data from a JSON file and initialize the 'users' array
try {
  const userData = fs.readFileSync("./data/db.json", "utf8");
  users = JSON.parse(userData);
  console.log("User data loaded:", users);
} catch (err) {
  console.error("Error reading/parsing JSON file:", err);
}

// Get purpose statement
app.get('/api/purpose-statement', (req, res) => {
  res.json({ purposeStatement: gameState.purposeStatement });
});

// User authentication
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    console.log("Login successful");
    // In a real application, you would generate and return a JWT token here.
    res.json({ message: 'Authentication successful' });
  } else {
    res.status(401).json({ error: 'Authentication failed' });
  }
});

flag = true;
// Handle game submission and winning logic
app.post('/api/submit_game', (req, res) => {
  const { datas } = req.body;

  let flag = true;

  for (let i = 0; i < gameState.purposeStatement.length; i++) {
    if (datas[i] !== null && datas[i].length > 0) {
      if (datas[i] !== gameState.purposeStatement[i]) {
        flag = false;
        break;
      }
    }
  }

  if (flag) {
    res.json({ message: 'You won!' });
  } else {
    res.json({ message: 'You lost.' });
  }
});

// Get game result
app.get('/api/result', (req, res) => {
  if (flag) {
    res.status(200).json({ message: 'You won' });
  } else {
    res.status(200).json({ message: 'You lost' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
