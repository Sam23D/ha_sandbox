import { h, app } from "./js/hyperapp.js"
import { side_bar } from "./js/AntDesign/SideMenu.js"
import { layout } from "./js/AntDesign/Layout.js"


app({
  init: 0,
  view: state =>
    layout([
      side_bar()
    ]),
  node: document.getElementById("app")
})