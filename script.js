function akhaName() {
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
      alert("Your Akan name is Kwasi");
      break;
    case "1female":
    case "-6female":
      alert("Your Akan name is Akosua");
      break;
    case "2male":
    case "-5male":
      alert("Your Akan name is Kwadwo");
      break;
    case "2female":
    case "-5female":
      alert("Your Akan name is Adwoa");
      break;
    case "3male":
    case "-4male":
      alert("Your Akan name is Kwabena");
      break;
    case "3female":
    case "-4female":
      alert("Your Akan name is Abenaa");
      break;
    case "4male":
    case "-3male":
      alert("Your Akan name is Kwaku");
      break;
    case "4female":
    case "-3female":
      alert("Your Akan name is Akua");
      break;
    case "5male":
    case "-2male":
      alert("Your Akan name is Yow");
      break;
    case "5female":
    case "-2female":
      alert("Your Akan name is Yaa");
      break;
    case "6male":
    case "-1male":
      alert("Your Akan name is Kofi");
      break;
    case "6female":
    case "-1female":
      alert("Your Akan name is Afua");
      break;
    case "0male":
    case "-0male":
      alert("Your Akan name is Kwame");
      break;
    case "0female":
    case "-0female":
      alert("Your Akan name is Ama");
      break;
    default:
      alert("oops! seems like you errored retry with correct inputs");
  }
}
