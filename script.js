let elapsedTime = 0;
let timer = null;
function updateDisplay() {
  let minutes = Math. floor(elapsedTime / 60000);
  let seconds = Math. floor((elapsedTime % 60000)/ 1000);
  let milliseconds = Math. floor((elapsedTime % 1000)/ 10);
  document.getElementById("time").textContent = `${minutes}:${seconds}:${milliseconds}`;
}
function start() {
if (timer !== null) return;
timer = setInterval(() =>{
  elapsedTime += 10;
  updateDisplay();
}, 10);
}
function stop(){
  clearInterval(timer);
  timer = null;
}
function reset(){
  stop();
  elapsedTime = 0;
  updateDisplay();
}
