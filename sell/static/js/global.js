window.onload = function () {
  var html = document.getElementById('html');
  var owidth = document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = owidth / 750 * 100 + "px";
}
window.onresize = function () {
  var html = document.getElementById('html');
  var owidth = document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = owidth / 750 * 100 + "px";
}
