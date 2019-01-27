function Nav() {
  var button, list
  function update() {
    button = document.getElementById("navButton");
    list = document.getElementById("navList");
  }
  update();
  var shown = false;
  function show() {
    list.style.display = "";
    shown = true;
  }
  function hide() {
    list.style.display = "none"
    shown = false
  }
  function switch_show() {
    update();
    if (shown) {
      hide();
    } else {
      show();
    }
  }
  return {
    list,
    button,
    switch_show
  }
}

let nav = Nav()
nav.button.onclick = nav.switch_show;
