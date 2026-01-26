// getting started with express js


// 1. including express module and initializing an app
const express = require("express");
const app = express();
// 2. variable that stores the port number
const port = 3000;

// 3. request response behavior of the app
app.get("/", (req, res) => {
  res.send("Hello World!");
});


// 4. start your app or we can say server at the specified port
// app.listen method used to binding the application to a specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});