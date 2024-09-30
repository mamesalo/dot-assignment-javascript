function turnOnLight() {
  document.getElementById("bulb").src = "bulb-on.png";
}
function turnOffLight() {
  document.getElementById("bulb").src = "bulb-off.png";
}
function getTime() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    second: "numeric",
  });
  document.getElementById("time").innerHTML = "Time: " + currentTime;
}
function modifiyString() {
  const value = document.getElementById("text1").value;
  const str = value.substr(1, value.length - 2);

  document.getElementById("string").innerHTML = str;
}
