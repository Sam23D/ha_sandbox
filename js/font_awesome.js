import { h } from "./hyperapp.js"

export const  fas = (name)=>
  h('i', { class: `fas fa-${name}`}, [])