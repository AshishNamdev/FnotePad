var { ActionButton } = require('sdk/ui/button/action');
var f_url = "data:text/html, <html contenteditable>";
var tab = require("sdk/tabs");

var button = ActionButton({
  id: "FnotePad",
  label: "FnotePad : pin a tab to be used as NotePad",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state)
{
  console.log("button status '" + state.disabled + "'");
  FnotePad(state.disabled);
}

function FnotePad(status)
{
  if(status)
    tab.close();
  else
  {
    /*tab.open(f_url);
    tab.url = "";
    tab.title = "FnotePad";
    */
    tab.open({
      url: f_url,
      isPinned: true,
      onOpen: function onOpen(tab) {
         tab.title = "FnotePad";
      }
    });
  }
}