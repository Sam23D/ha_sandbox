import { h } from "../../hyperapp.js"
import { 
  data_percentage, 
  data_money,
  data_date,
  data_multi
} from "./data.js"


export const attributes_card = (children)=>
  h('div', { class: `attributes_card`}, children)

export const attributes_card_block = ({label, value})=>
  h('div', { class: `attributes_card_block`}, [
    h('label', { class: `attributes_card_label`}, [label]),
    h('label', { class: `attributes_card_value`}, [value])
  ])

// DATA CARD
export const data_card = (children) =>
  h('div', { class: `data_card`}, children)

export const data_card_space_row = ()=>
  h('div', { class: `data_card_space_row`}, [])

export const data_card_row = (children)=>
  h('div', { class: `data_card_row `}, children)

export const data_card_labeled_bold_value = ({label, value}) =>
  h('span', { class: `data_card_labeled_bold_value`}, [
    h('label', { class: ` `}, [ label ]),
    h('span', { class: ` `}, [ value ]),
  ])

const data_card_labeled_value_spacer = () =>
  h('div', { class: `data_card_labeled_value_spacer`}, [])

const data_card_bold_label = ({label}) =>
  h('div', { class: `data_card_bold_label`}, [label])

export const data_card_labeled_value = ({label, value}) =>
  h('span', { class: `data_card_labeled_value`}, [
    h('label', { class: ` `}, [ label ]),
    h('span', { class: ` `}, [ value ]),
  ])

const data_card_labeled_short_value = ({label, value}) =>
  h('span', { class: `data_card_labeled_short_value`}, [
    h('label', { class: ` `}, [ label ]),
    h('span', { class: ` `}, [ value ]),
  ])

// VALUE CARD
export const value_card = ({label, value}) => 
  h('div', { class: `value_card`}, [
    h('p', { class: `value_card_label`}, [label]),
    h('p', { class: `value_card_value`}, [value]),
  ])