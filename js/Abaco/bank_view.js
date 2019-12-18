import { h } from "../hyperapp.js"
import { content_container, content_row } from "../AntDesign/ContentContainer.js"
import { paginated_table } from "../AntDesign/components/tables.js"
import { 
  attributes_card, 
  attributes_card_block,
  data_card, 
  value_card,
  data_card_labeled_value,
  data_card_labeled_bold_value,
  data_card_row,
  data_card_space_row
} from "../AntDesign/components/cards.js"

import { 
  data_percentage, 
  data_money,
  data_date,
  data_multi
} from "../AntDesign/components/data.js"

import { top_menu } from "../AntDesign/components/top_menu.js"

export const bank_view = () =>
  content_container([
    top_menu(),
    bank_top_info(),
    credit_detail_info(),
    content_row([
      bank_resale_table({table:{title: "Movimientos de reventa"}}),
      bank_note_summary_table({table:{title: "Resumen de Notas"}}),
    ])
  ])

const bank_top_info = () =>
  content_row([
    attributes_card([
      attributes_card_block({label: "-", value: "Fondo notas"}),
      attributes_card_block({label: "Referencia", value: "33000012"}),
      attributes_card_block({label: "Monto fondeado", value: data_money("60000")}),
      attributes_card_block({label: "Plazo", value: data_multi("24", {s:"pago", d:"pagos"})}),
    ]),
  ])

const credit_detail_info = () =>
  content_row([
    data_card([
      data_card_row([
        data_card_labeled_bold_value({label: "Fondo con ref.", value: "33000012"}),
      ]),
      data_card_space_row(),
      data_card_row([
        // data_card_labeled_value({label: "Estatus", value: "Al Corriente"}),
        data_card_labeled_value({label: "Fecha apertura:", value: data_date("2019-02-15")}),
        data_card_labeled_value({label: "Fecha estimada de cierre:", value: data_date("2021-02-15")}),
      ]),
      data_card_row([
        data_card_labeled_value({label: "No. notas:", value: "64" }),
        data_card_labeled_value({label: "Tasa interes:", value: data_percentage("20")}),
      ]),
      data_card_space_row(),
      data_card_row([
        data_card_labeled_value({label: "Total repagado", value: data_money("64") }),
      ]),
      data_card_row([
        data_card_labeled_value({label: "Capital repagado", value: data_money("20")}),
        data_card_labeled_value({label: "Intereses pagados", value: data_money("64") }),
      ]),
    ])
  ])



const bank_note_summary_table = ({table}, data=NOTE_SUMMARY_MOCK) =>{
  let head_labels = ["Compra", "ID", "Cantidad", "Capital repagado", "Intereses recibidos", "Comision"]

  let data_rows = Object.values(data).map(({start_date, note_identifier, amount, paid_capital, ordinary_interest, commission})=>{
    return [ 
      data_date(start_date), note_identifier, data_money(amount), 
      data_money(paid_capital), data_money(ordinary_interest), 
      data_money(commission)
    ]
  })

  return paginated_table({title: table.title}, {rows: data_rows, head: head_labels, pagination: false, page_size: 3 })
}

const NOTE_SUMMARY_MOCK = {
  "12000000963" : {
    amount: "2000.00",
    commission: "63.22474211862336000000000000",
    note_identifier: "12000000963",
    ordinary_interest: "917.0153454400000000000000000",
    paid_capital: "4533.393457889600000000000000",
    payment_amount: "5597.131258600000000000000000",
    sold_date: "not_sold",
    start_date: "2016-06-16"
  },"12000000092" : {
    amount: "5000.00",
    commission: "71.59160245333333333333333333",
    note_identifier: "12000000092",
    ordinary_interest: "1171.688333333333333333333333",
    paid_capital: "5000.001533333333333333333333",
    payment_amount: "6359.160000000000000000000000",
    sold_date: "not_sold",
    start_date: "2016-03-15"
  },
  "12000000964" : {
    amount: "2000.00",
    commission: "63.22474211862336000000000000",
    note_identifier: "12000000963",
    ordinary_interest: "917.0153454400000000000000000",
    paid_capital: "4533.393457889600000000000000",
    payment_amount: "5597.131258600000000000000000",
    sold_date: "not_sold",
    start_date: "2016-06-16"
  },"12000000093" : {
    amount: "5000.00",
    commission: "71.59160245333333333333333333",
    note_identifier: "12000000092",
    ordinary_interest: "1171.688333333333333333333333",
    paid_capital: "5000.001533333333333333333333",
    payment_amount: "6359.160000000000000000000000",
    sold_date: "not_sold",
    start_date: "2016-03-15"
  },
  "12000001964" : {
    amount: "2000.00",
    commission: "63.22474211862336000000000000",
    note_identifier: "12000000963",
    ordinary_interest: "917.0153454400000000000000000",
    paid_capital: "4533.393457889600000000000000",
    payment_amount: "5597.131258600000000000000000",
    sold_date: "not_sold",
    start_date: "2016-06-16"
  },"12000001093" : {
    amount: "5000.00",
    commission: "71.59160245333333333333333333",
    note_identifier: "12000000092",
    ordinary_interest: "1171.688333333333333333333333",
    paid_capital: "5000.001533333333333333333333",
    payment_amount: "6359.160000000000000000000000",
    sold_date: "not_sold",
    start_date: "2016-03-15"
  },
}

const bank_resale_table = ({table}, data=RESALE_DATA_MOCK) =>{
  let dates = Object.keys(data)
  let values = Object.values(data)

  // This should return a list of columns to be passed to the table element something like this:
  // [  [ amount_bought, "buyers_refs", amount_sold, "seller_refs"],
  //    [ amount_bought, "buyers_refs", amount_sold, "seller_refs"],
  //    ...
  // ]
  let buys_sells = values.map(({buy, sell})=>([ 
    _sum_resale_data(buy), 
    _sum_resale_data(sell) 
  ]))
  .map(([ buys, sells ])=>([...buys, ...sells ]))
  
  // This part merges the date to each o the previous rows getting something like this
  // [  ["date", amou..., ..., "seller_refs"],
  //    ["date", amou..., ..., "seller_refs"],
  //    ...
  // ]
  let final_table_data = dates.map(function(date, i) {
    return [ data_date(date) , ...buys_sells[i]];
  });

  return _resale_paginated_table({table}, final_table_data)
}

const _resale_paginated_table = ({table}, final_table_data)=>
  h('div', { class: ` `}, [
    paginated_table({title: table.title}, {rows: final_table_data, head: ["Fecha", "Compra", "", "Venta", ""]}),
  ])

const _sum_resale_data = (movements) =>{
  return movements.reduce(([acc_amount, acc_refs], [ref, amount])=>{
    // TODO remove && from line below to add refs string
    return [parseFloat(amount) + parseFloat(acc_amount), ( "" && `${ acc_refs } ${ ref }`) ]
  }, [0, ""] )

}

const RESALE_DATA_MOCK = {
    "2016-03-15" : {
      buy: [
        ["12000000254", "2500.00"],
        ["12000000173", "5750.00"],
        ["12000000394", "2500.00"],
        ["12000000335", "1250.00"],
        ["12000000505", "1250.00"],
        ["12000000432", "1250.00"],
        ["12000000513", "2500.00"]
      ],
      sell: [
        ["13200000026", "-2500.00"],
        ["13200000026", "-5750.00"],
        ["13200000026", "-2500.00"],
        ["13200000026", "-1250.00"],
        ["13200000026", "-1250.00"],
        ["13200000026", "-1250.00"],
        ["13200000026", "-2500.00"]
      ]
    },
    "2016-06-16" :{
      buy: [["12000000963", "2000.00"], ["12000000017", "224.91"]],
      sell: [["12000000173", "-2000.00"], ["12000000262", "-224.91"]]
    },
    "2016-07-18" : {
      buy: [["12000000963", "1081.01"]],
      sell: [["12000000211", "-1081.01"]]
    },
    "2016-11-17" : {
      buy: [["13200000034", "269.39"]],
      sell: [["12000000360", "-269.39"]]
    },
    "2017-10-17" : {
      buy: [["13200000034", "624.08"]],
      sell: [["12000000254", "-624.08"]]
    },
    "2018-03-05" : {
      buy: [["13100000029", "103.88"]],
      sell: [["12000000068", "-103.88"]]
    }
  
}