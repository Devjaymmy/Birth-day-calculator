var toggleBar = document.querySelector("#menu-bars");
var toggleList = document.querySelector(".menu");

toggleBar.addEventListener("click", function () {
  toggleBar.classList.toggle("is-active");
  toggleList.classList.toggle("active");
});

function akhaName() {
  var weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var DD = parseInt(document.getElementById("date").value);
  var MM = parseInt(document.getElementById("month").value);
  var year = document.getElementById("year").value;
  var gender = document.getElementById("gender").value;
  const myArray = year.split("");
  var ccStr = myArray[0] + myArray[1];
  var yyStr = myArray[2] + myArray[3];
  var CC = parseInt(ccStr);
  var YY = parseInt(yyStr);
  var answer =
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;

  var truncatedAnswer = Math.trunc(answer);
  var switchAnswer = truncatedAnswer.toString() + gender;
  switch (switchAnswer) {
    case "1male":
    case "-6male":
      alert("Your Akan name is Kwasi, implying you were born on " + weekDay[0]);
      break;
    case "1female":
    case "-6female":
      alert(
        "Your Akan name is Akosua, implying you were born on " + weekDay[0]
      );
      break;
    case "2male":
    case "-5male":
      alert(
        "Your Akan name is Kwadwo, implying you were born on " + weekDay[1]
      );
      break;
    case "2female":
    case "-5female":
      alert("Your Akan name is Adwoa, implying you were born on " + weekDay[1]);
      break;
    case "3male":
    case "-4male":
      alert(
        "Your Akan name is Kwabena, implying you were born on " + weekDay[2]
      );
      break;
    case "3female":
    case "-4female":
      alert(
        "Your Akan name is Abenaa, implying you were born on " + weekDay[2]
      );
      break;
    case "4male":
    case "-3male":
      alert("Your Akan name is Kwaku, implying you were born on " + weekDay[3]);
      break;
    case "4female":
    case "-3female":
      alert("Your Akan name is Akua, implying you were born on " + weekDay[3]);
      break;
    case "5male":
    case "-2male":
      alert("Your Akan name is Yow, implying you were born on " + weekDay[4]);
      break;
    case "5female":
    case "-2female":
      alert("Your Akan name is Yaa, implying you were born on " + weekDay[4]);
      break;
    case "6male":
    case "-1male":
      alert("Your Akan name is Kofi, implying you were born on " + weekDay[5]);
      break;
    case "6female":
    case "-1female":
      alert("Your Akan name is Afua, implying you were born on " + weekDay[5]);
      break;
    case "0male":
    case "-0male":
      alert("Your Akan name is Kwame, implying you were born on " + weekDay[6]);
      break;
    case "0female":
    case "-0female":
      alert("Your Akan name is Ama, implying you were born on " + weekDay[6]);
      break;
    default:
      alert("oops! seems like you errored retry with correct inputs");
  }
}
