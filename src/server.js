const express = require("express");

const app = express();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/garaje-live-coding")
  .then(() => console.log("Connected to Database"));

const Coaster = require("./Models/coaster.model");

const cors = require("cors");
app.use(cors());

app.get("/api/coasters", (req, res) => {
  Coaster.find().then((allCoasters) => res.json(allCoasters));
});

app.get("/api/details/:coaster_id", (req, res) => {
  const { coaster_id } = req.params;
  Coaster.findById(coaster_id).then((coaster) => res.json(coaster));
});

app.listen(5005, () => console.log("The server starts"));
