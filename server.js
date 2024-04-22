const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Database connection
const db = mysql.createConnection({
  host: 'localhost', // or your host
  user: 'root', // your database user
  password: '', // your database password
  database: 'my_react_db', // your database name
});

// Test database connection
db.connect(err => {
  if (err) { console.log('Error connecting to the database.', err); }
  else { console.log('Connected to the database.'); }
});

// Define routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your backend service!' });
});

// Example route: Get data from your database
app.get('/api/data', (req, res) => {
  const sqlQuery = 'SELECT * FROM yourTableName';
  db.query(sqlQuery, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Define route to add a new car
app.post('/api/cars', (req, res) => {
  const { name, year, gear, price, fuel } = req.body;
  const sqlQuery = 'INSERT INTO cars (name, year, gear, price, fuel) VALUES (?, ?, ?, ?, ?)';
  db.query(sqlQuery, [name, year, gear, price, fuel], (err, result) => {
    if (err) {
      console.error('Error adding car:', err);
      res.status(500).json({ error: 'Failed to add car' });
    } else {
      console.log('Car added successfully');
      res.status(200).json({ message: 'Car added successfully' });
    }
  });
});
