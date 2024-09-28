function calculateTriangleArea() {
  const s = (5 + 6 + 7) / 2;
  const area = Math.sqrt(s * (s - 5) * (s - 6) * (s - 7));
  const result = document.getElementById("triangle");
  result.innerHTML = area;
}
function calculateMultiplication() {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const multiply = num1.value * num2.value;
  const divide = num1.value / num2.value;
  const multiplyResult = document.getElementById("multiplication");
  const divideResult = document.getElementById("division");
  multiplyResult.innerHTML = num1.value + " * " + num2.value + " = " + multiply;
  divideResult.innerHTML = num1.value + " / " + num2.value + " = " + divide;
}
function createString() {
  const string = document.getElementById("text1");
  const newString = "JavaScript " + string.value;
  document.getElementById("string").innerHTML = newString;
}
