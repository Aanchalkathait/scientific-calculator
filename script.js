const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar1');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// calculations



function calculateExponentiation() {
  var number = parseFloat(document.getElementById('result').value);
  var result = Math.pow(number, 2);
  document.getElementById('result').value = result;
}

function calculateSin() {
  var number = parseFloat(document.getElementById('result').value);
  var result = Math.sin(number * (Math.PI / 180)); // Convert degrees to radians
  document.getElementById('result').value = result;
}

function calculateCos() {
  var number = parseFloat(document.getElementById('result').value);
  var result = Math.cos(number * (Math.PI / 180)); // Convert degrees to radians
  document.getElementById('result').value = result;
}

function calculateTan() {
  var number = parseFloat(document.getElementById('result').value);
  var result = Math.tan(number * (Math.PI / 180)); // Convert degrees to radians
  document.getElementById('result').value = result;
}

function calculateLog() {
  var number = parseFloat(document.getElementById('result').value);
  if (number > 0) {
    var result = Math.log(number);
    document.getElementById('result').value = result;
  } else {
    document.getElementById('result').value = 'Error';
  }
}

function calculateSquareRoot() {
  var number = parseFloat(document.getElementById('result').value);
  if (number >= 0) {
    var result = Math.sqrt(number);
    document.getElementById('result').value = result;
  } else {
    document.getElementById('result').value = 'Error';
  }
}

function calculateFactorial() {
  var number = parseInt(document.getElementById('result').value);
  if (number >= 0) {
    var result = 1;
    for (var i = 2; i <= number; i++) {
      result *= i;
    }
    document.getElementById('result').value = result;
  } else {
    document.getElementById('result').value = 'Error';
  }
}

function calculatePower() {
  var expression = document.getElementById('result').value;
  var values = expression.split('^');
  var base = parseFloat(values[0]);
  var exponent = parseFloat(values[1]);

  if (!isNaN(base) && !isNaN(exponent)) {
    var result = Math.pow(base, exponent);
    document.getElementById('result').value = result;
  } else {
    document.getElementById('result').value = 'Error';
  }
}



function calculatePercentage() {
  var number = parseFloat(document.getElementById('result').value);
  var result = number / 100;
  document.getElementById('result').value = result;
}


function clearDisplay() {
  document.getElementById('result').value = '';
}

function deleteDigit() {
  var currentValue = document.getElementById('result').value;
  document.getElementById('result').value = currentValue.slice(0, -1);
}

function appendInput(value) {
  document.getElementById('result').value += value;
}

function calculateResult() {
  var expression = document.getElementById('result').value;

  try {
    var result = math.evaluate(expression);
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function evaluateExpression(expression) {
  // Evaluate the expression using the eval() function
  var result = eval(expression);
  return result;
}
