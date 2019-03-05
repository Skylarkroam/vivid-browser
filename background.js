chrome.windows.getAll({}, function (winArr) {
  // print(winArr)

  for (var win of winArr) {
    SinWave(win);
  }
});

function SinWave(win) {
  // var dl = Math.random() < 0.5 ? -1 : 1;
  // var dt = Math.random() < 0.5 ? -1 : 1;
  var angle = 0;
  // var t = 0;
  // while (1) {



  // for (var i = 0; i <= 2; i++) {
  var wl = Math.round(Math.sin(Math.random() < 0.5 ? -1 : 1)) * 2;
  // var wl = Math.round(Math.sin(angle) * 40;
  // angle += 0.01;
  // var wl = 0


  chrome.windows.update(win.id, { left: win.left, top: win.top + wl }, SinWave);
  // }
  // t += 1
  // }

}

chrome.windows.onCreated.addListener(function (win) {
  SinWave(win);
});