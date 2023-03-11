const express = require("express");
const cors = require("cors");
const { purchase } = require("./src/controllers");
require("./src/telegram");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});

app.post("/web-data", purchase);
