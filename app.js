const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000.");
});
