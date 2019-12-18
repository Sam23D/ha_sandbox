import { h } from "../../hyperapp.js"

let _paginated_table_opts_def = {
  rows: [], head: [],
  pagination: false, 
  page_size: 12, page: 0
}

let {
  range,
  splitEvery
} = R

export const paginated_table = ({title}, {rows, head, pagination, page_size, page}=_paginated_table_opts_def)=>{
  // checar si hay paginacion
  //   paginar contenido
  //   seleccionar pagina visible
  let display_rows = rows
  let no_pages = 1
  if( pagination ){
    console.log("hay paginacion")
    let disp_page_size = page_size || 12
    let paginated_rows = splitEvery(disp_page_size, rows)
    no_pages = paginated_rows.length
    let disp_page = page || 0
    console.log("paginacion", no_pages, paginated_rows)
    display_rows = paginated_rows[disp_page]
  }

  return h('div', { class: `paginated_table`}, [
    h('div', { class: `paginated_table_title`}, [
      title
    ]),
    h('table', { class: `paginated_table_content`}, [
      paginated_table_row_head(head),
      display_rows.map((row_data)=>{
        return paginated_table_row(row_data)
      })
    ]),
    paginated_table_pagination(no_pages),
  ])
}
  

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

export const paginated_table_pagination = (no_pages) =>
  h('div', { class: `paginated_table_pagination`}, [
    h('span', { class: ` `}, ["<"]),
    range(1, parseInt(no_pages) + 1).map(( page_number )=>{
      return h('span', { 
        onclick: (state)=>(console.log(page_number),state),
        class: ` `}, [page_number])
    }),
    h('span', { class: ` `}, [">"]),
  ])