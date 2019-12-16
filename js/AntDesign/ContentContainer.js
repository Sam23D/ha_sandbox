import { h } from "../hyperapp.js"

export const content_container = (children)=>
  h('div', { class: `content_container`}, children)

export const content_row = (children) =>
  h('div', { class: `content_row`}, [
    children
  ])