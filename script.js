var age = 0;
var dateOfBirth = "";
var birthMonth = [];
var birthDay = 0;
var birthYear = 0;
var futureYear = 0;
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var futureMonth = "";

function flashForward() {
  dateOfBirth = document.getElementById("dob").value.split("/");
  futureYear = document.getElementById("futureyear").value;
  birthMonth = dateOfBirth[0];
  birthDay = parseInt(dateOfBirth[1]);
  birthYear = dateOfBirth[2];
  try { if ((birthYear.length < 2) || (birthYear.length == 3) || (birthYear.length > 4)) {
    birthYear = 0;
  } else if ((birthYear.length == 2) && (birthYear > 40)) {
    birthYear = "19" + birthYear;
  } else if ((birthYear.length == 2) && (birthYear < 41)) {
    birthYear = "20" + birthYear;
  } else {
    birthYear = birthYear;
  }
}
  catch(err) {
    birthMonth = 0;
  }
  age = futureYear - parseInt(birthYear);
  futureMonth = months[birthMonth-1];
  if (birthMonth < 1 || birthDay < 1 || birthYear < 1 || futureYear < 1) {
      document.getElementById("result").innerHTML = "Oops. I don't have enough information. Try again?";
  } else if (age > 116) {
    document.getElementById("submitbutton").value = "Try again?"
    document.getElementById("result").innerHTML = "Great Scott... we've arrived on " + futureMonth + " " + birthDay + ", " + futureYear + ".<br>Happy birthday! You are now " + age + " years old, making you the oldest known human. Wow. How do you feel?";
  } else if (age > 0) {
    document.getElementById("submitbutton").value = "Try again?"
    document.getElementById("result").innerHTML = "Great Scott... we've arrived on " + futureMonth + " " + birthDay + ", " + futureYear + ".<br>Happy birthday! You are now " + age + " years old.";
  } else if (age == 0) {
    document.getElementById("submitbutton").value = "Try again?"
    document.getElementById("result").innerHTML = "Great Scott... we've arrived on " + futureMonth + " " + birthDay + ", " + futureYear + ".<br> And we're watching your birth. TMI, dude.";
  } else {
    document.getElementById("submitbutton").value = "Try again?"
    document.getElementById("result").innerHTML = "Great Scott... we've arrived in the year " + futureYear + ".<br> You haven't even been born yet!";
  }
}
