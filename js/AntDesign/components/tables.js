import { h } from "../../hyperapp.js"

let _paginated_table_opts_def = {
  rows: [], head: []
}
export const paginated_table = ({title}, {rows, head}=_paginated_table_opts_def)=>
  h('div', { class: `paginated_table`}, [
    h('div', { class: `paginated_table_title`}, [
      title
    ]),
    h('table', { class: `paginated_table_content`}, [
      paginated_table_row_head(head),
      rows.map((row_data)=>{
        return paginated_table_row(row_data)
      })
    ]),
    paginated_table_pagination(),
  ])

export const paginated_table_row_head = (head_data)=>
  h('tr', { class: `paginated_table_row_head`}, [
    head_data.map((val)=>{
      return paginated_table_row_head_cell(val)
    })
  ])

export const paginated_table_row = (data_cells)=>
  h('tr', { class: `paginated_table_row`}, [
    data_cells.map(( cell_data )=>{
      return paginated_table_row_cell([cell_data])
    })
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