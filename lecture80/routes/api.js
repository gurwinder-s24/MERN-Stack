// ye file sare api specific routes ko handle karegi
const express = require("express");
const router = express.Router();

// get request
router.get("/", (req,res) => {
  res.send("Got a get request to the homepage");
  //res.sendFile("../dummy.html", { root: __dirname });
});
// post request
router.post("/items", (req,res) => {
  res.send("Got a post request to /items");
  //res.json({ message: "Item created successfully" });
});
// put request
router.put("/items/:id", (req,res) => {
  res.send(`Got a put request to /items/${req.params.id}`);
});
// delete request
router.delete("/items/:id", (req,res) => {
  res.send(`Got a delete request to /items/${req.params.id}`);
});


module.exports = router;