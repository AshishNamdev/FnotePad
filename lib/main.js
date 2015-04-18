var { ToggleButton } = require('sdk/ui/button/toggle');
//var panels = require("sdk/panel");
var win_fnotepad;
var self = require("sdk/self");

var button = ToggleButton({
  id: "FnotePad",
  label: "FnotePad : Firefox Window as NotePad",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});

function handleChange(state) {
  /*var panel = panels.Panel({
  contentURL: self.data.url("bugBasket.htm"),
  onHide: handleHide
  });
  */
  if (state.checked) {
    /*panel.show({
      position: button
    });
  */
    FnotePad();
  }
}

function handleHide() {
  button.state('window', {checked: false});
  //panel.destroy();
  close_FnotePad();
}

function FnotePad()
{
  var url = "data:text/html, <html contenteditable>";
  //window.location.href = url;
  win_fnotepad = window.open(url,'_blank');
}
function close_FnotePad()
{
  win_fnotepad.close();
}