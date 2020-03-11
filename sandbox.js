import { h, app } from "./js/hyperapp.js"
app({
  init: 0,
  view: state =>
    h('div', { class: ` `}, ["Hello world!"]),
  node: document.getElementById("app")
})