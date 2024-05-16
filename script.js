function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.innerText += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.innerText = "";
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "Error";
  }
}
