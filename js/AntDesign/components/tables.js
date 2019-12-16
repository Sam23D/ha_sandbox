import { h } from "../../hyperapp.js"

export const paginated_table = ()=>
  h('div', { class: `paginated_table`}, [
    h('div', { class: `paginated_table_title`}, [
      "Pagos"
    ]),
    h('table', { class: `paginated_table_content`}, [
      paginated_table_row_head(),
      paginated_table_row(),
      paginated_table_row(),
      paginated_table_row(),
      paginated_table_row(),
      paginated_table_row(),
      paginated_table_row(),
      paginated_table_row(),
      paginated_table_row(),
      paginated_table_row(),
    ]),
    paginated_table_pagination(),
  ])

export const paginated_table_row_head = ()=>
  h('tr', { class: `paginated_table_row_head`}, [
    paginated_table_row_head_cell([""]),
    paginated_table_row_head_cell(["Referencia"]),
    paginated_table_row_head_cell(["Cantidad"]),
  ])

export const paginated_table_row = ()=>
  h('tr', { class: `paginated_table_row`}, [
    paginated_table_row_cell(["1"]),
    paginated_table_row_cell(["33000012"]),
    paginated_table_row_cell(["$1200,00"]),
  ])

export const paginated_table_row_head_cell = (children)=>
  h('td', { class: `paginated_table_row_head_cell`},   [
    children
  ])
export const paginated_table_row_cell = (children)=>
  h('td', { class: `paginated_table_row_cell`},   [
    children
  ])

export const paginated_table_pagination = () =>
  h('div', { class: `paginated_table_pagination`}, [
    h('span', { class: ` `}, ["<"]),
    h('span', { class: ` `}, ["1"]),
    h('span', { class: ` `}, ["2"]),
    h('span', { class: ` `}, ["13"]),
    h('span', { class: ` `}, [">"]),
  ])