// Express.js Middlewares
// importing
const express = require('express');
const app = express();
const port = 3000;

// importing and mounting external routes
const route = require('./routes/route');
app.use('/api', route);


// // loading inbuilt middleware in app
// app.use(express.json());

// app.get('/', (req, res) => {
//   console.log(req.body); 
//   // printing undefined as there is no middleware
//   // to parse json body
//   res.send('Hello, World!');
// });




// creating some application level middlewares
// middlewares for logging, auth, validation

const validationMiddleware = (req, res, next) => {
    console.log('Validation kr raha hoon...');
    res.send('Request blocked by validation middleware!');
    next();
}
const authMiddleware = (req, res, next) => {
    console.log('Authention kr raha hoon...');
    next();
}
const loggerMiddleware = (req, res, next) => {
    console.log('Logging kr rha hoon...');
    next();
}
// order of loading middlewares matters
app.use(loggerMiddleware);
app.use(authMiddleware);
app.use(validationMiddleware);


const requestHandler = (req, res) => {
    console.log('main request handler hoon...');
    res.send('Request handled successfully!');
}
app.get('/', requestHandler);




// starting the server/app
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});