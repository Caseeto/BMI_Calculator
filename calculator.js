const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var number1 = Number(req.body.num1);
  var number2 = Number(req.body.num2)/100;
  var result = number1/number2**2;
  var aboutYou = Math.round(result*10)/10
  if(aboutYou < 18.5){
    res.send("Your BMI is: " + aboutYou + "<h1>Underweight!!</h1>");
  }
  else if(aboutYou>=18.5 && aboutYou<=24.9){
    res.send("Your BMI is: " + aboutYou + "\<h1>Healthy Weight!!</h1>");
  }
  else if(aboutYou>=25 && aboutYou<=29.9){
    res.send("Your BMI is: " + aboutYou + "<h1>Over Weight!!</h1>");
  }
  else if(aboutYou>=30 && aboutYou<=34.9){
    res.send("Your BMI is: " + aboutYou + "<h1>Obese!!</h1>");
  }
  else{
    res.send("Your BMI is: " + aboutYou + "<h1>Morbidly Obese!!</h1>");
  }

});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});
