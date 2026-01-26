// Express.js Basics - Routing and Request Methods

const express = require('express');
const app = express();
const port = 3000;

// moving routes to separate file item.js
// and importing here
const apiRoutes = require('./routes/api');
// load into application
app.use('/api', apiRoutes);
// /api/    -> homepage get request
// /api/items -> item post request
// /api/items/:id -> put and delete requests
const birdRoutes = require('./routes/birds');
app.use('/birds', birdRoutes);


// // Requests and Responses
// // get request
// app.get("/", (req,res) => {
//   res.send("Got a get request to the homepage");
//   //res.sendFile("./dummy.html", { root: __dirname });
// });
// // post request
// app.post("/items", (req,res) => {
//   res.send("Got a post request to /items");
//   //res.json({ message: "Item created successfully" });
// });
// // put request
// app.put("/items/:id", (req,res) => {
//   res.send(`Got a put request to /items/${req.params.id}`);
// });
// // delete request
// app.delete("/items/:id", (req,res) => {
//   res.send(`Got a delete request to /items/${req.params.id}`);
// });



// chaining also possible
// app.get().post().put().delete();

// another way of writing request handlers using app.route
// app.route("/")
//   .get((req, res) => {
//     res.send("GET request to the homepage");
//   });


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});