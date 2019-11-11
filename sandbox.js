import { h, app } from "./js/hyperapp.js"

app({
  init: 0,
  view: state =>
    h("div", { class: `component` }, [
      h('h1', { id: `message` }, ["Hello world!"])
    ]),
  node: document.getElementById("app")
})