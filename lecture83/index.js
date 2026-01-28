const express = require('express');
const app = express();
const port = 3000;

// middleware to parse JSON bodies
app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // we don't need this as of now
// add routes only after these middlewares then only they will work
const users = require('./routes/users');
app.use('/api', users);

// connecting to db
const connectDB = require('./db');
connectDB();

app.get('/', (req, res) => {
    console.log('Im inside homepage route handler'); 
    res.send('Welcome to the Homepage!');
});


app.listen(port, () => {
  console.log(`Server is Up`);
});