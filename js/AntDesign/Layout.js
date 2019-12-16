import { h } from "../hyperapp.js"

export const layout = ( children )=>
  h('div', { class: `layout`}, children)