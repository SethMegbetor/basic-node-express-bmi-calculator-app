const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.send("hello world");
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", (req, res) => {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);

  let bmi = weight / (height * height);
  res.send(`<h1>Your BMI is ${bmi}</h1>`);
});
app.listen(PORT, () => {
  console.log(`Server started. Listening on port ${PORT}`);
});
