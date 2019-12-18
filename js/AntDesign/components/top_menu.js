import { h } from "../../hyperapp.js"
import { fas } from "../../font_awesome.js"

export const top_menu = ()=>
  h('div', { class: `top_menu`}, [
    top_menu_local_files(),
    h('div', { class: `top_menu_action_icon`}, [fas("search")]),
    top_menu_search_bar(),
  ])

const top_menu_search_bar = () =>
  h('div', { class: `top_menu_search_bar`}, [
    h('input', { 
      placeholder: "Buscar...",
      class: ``}, [])
  ])

const top_menu_local_files = () =>
    h('div', { class: `top_menu_action_icon`}, [
      fas("folder"),
    ])