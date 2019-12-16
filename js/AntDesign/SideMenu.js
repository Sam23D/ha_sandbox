import { h } from "../hyperapp.js"
import { fas } from "../font_awesome.js"

export const SideBarModel = {

}

export const side_bar = (model=SideBarModel) =>
  h('div', { class: `side_bar`}, [
    h('h2', { class: `side_bar_title`}, [ "Abaco Instruments" ]),
    h('ul', { class: `side_bar_item_list`}, [
      side_bar_head_item({label: "Creditos", icon: "money-check-alt"}),
      side_bar_tail_item({label: "Buscar"}),
      side_bar_tail_item({label: "Descargar"}),
      side_bar_head_item({label: "Inversiones", icon: "piggy-bank"}),
      side_bar_tail_item({label: "Buscar"}),
      side_bar_tail_item({label: "Descargar"}),
      // side_bar_head_item({label: "Inversiones", color: "blue"}),
      // side_bar_head_item({label: "Configuracion", color: "green"}),
    ])
  ])

const side_bar_head_item = ({label, icon}) =>
  h('li', { class: `side_bar_head_items`}, [
    h('div', { class: `side_bar_head_items_icon `}, [
      fas(icon)
    ]),
    h('span', { class: ` `}, [
      
      label
    ])
  ])

const side_bar_tail_item = ({label}) =>
  h('li', { class: `side_bar_tail_items`}, [
    h('span', { class: ` `}, [label])
  ])