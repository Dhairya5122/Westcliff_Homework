function generateCode() {
  var code = "";
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$";

  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }
  console.log("code", code);
  return code;
}
document.getElementById("codes").innerHTML = generateCode();


function disableButton() {
  document.getElementById("submit").disabled = true;
}

disableButton();
