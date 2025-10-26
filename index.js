var currentValue = "0";
document.querySelector("#display").innerText = currentValue;

function one() {
  if (currentValue == 0) currentValue = "1";
  else currentValue += "1";
  document.querySelector("#display").innerText = currentValue;
}
function two() {
  if (currentValue == 0) currentValue = "2";
  else currentValue += "2";
  document.querySelector("#display").innerText = currentValue;
}
function three() {
  if (currentValue == 0) currentValue = "3";
  else currentValue += "3";
  document.querySelector("#display").innerText = currentValue;
}
function four() {
  if (currentValue == 0) currentValue = "4";
  else currentValue += "4";
  document.querySelector("#display").innerText = currentValue;
}
function five() {
  if (currentValue == 0) currentValue = "5";
  else currentValue += "5";
  document.querySelector("#display").innerText = currentValue;
}
function six() {
  if (currentValue == 0) currentValue = "6";
  else currentValue += "6";
  document.querySelector("#display").innerText = currentValue;
}
function seven() {
  if (currentValue == 0) currentValue = "7";
  else currentValue += "7";
  document.querySelector("#display").innerText = currentValue;
}
function eight() {
  if (currentValue == 0) currentValue = "8";
  else currentValue += "8";
  document.querySelector("#display").innerText = currentValue;
}
function nine() {
  if (currentValue == 0) currentValue = "9";
  else currentValue += "9";
  document.querySelector("#display").innerText = currentValue;
}
function ac() {
  currentValue = "0";
  document.querySelector("#display").innerText = currentValue;
}
function del() {
  currentValue = currentValue.toString().slice(0, -1);
  document.querySelector("#display").innerText = currentValue || "0";
}
function dot() {
  currentValue += ".";
  document.querySelector("#display").innerText = currentValue;
}
function div() {
  currentValue += "/";
  document.querySelector("#display").innerText = currentValue;
}
function multi() {
  currentValue += "*";
  document.querySelector("#display").innerText = currentValue;
}
function add() {
  currentValue += "+";
  document.querySelector("#display").innerText = currentValue;
}
function minus() {
  currentValue += "-";
  document.querySelector("#display").innerText = currentValue;
}
function equal() {
  currentValue = eval(currentValue);
  document.querySelector("#display").innerText = currentValue;
}
function zero() {
  if (currentValue !== 0) {
    currentValue += "0";
  }
  document.querySelector("#display").innerText = currentValue;
}
