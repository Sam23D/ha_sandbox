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

export const credit_view = () =>
  content_container([
    top_menu(),
    credit_top_info(),
    credit_detail_info(),
    content_row([
      value_card({label: "pago para ponerse al corriente", value: "2,100"}),
      value_card({label: "pago para liquidar", value: "10,000"}),
    ]),
    credit_payments_table()
  ])

const credit_top_info = () =>
  content_row([
    attributes_card([
      attributes_card_block({label: "-", value: "Credito"}),
      attributes_card_block({label: "Referencia", value: "33000012"}),
      attributes_card_block({label: "Cantidad", value: data_money("60000")}),
      attributes_card_block({label: "Tasa interes", value: data_percentage("20")}),
      attributes_card_block({label: "Plazo", value: data_multi("24", {s:"pago", d:"pagos"})}),
    ]),
  ])

const credit_detail_info = () =>
  content_row([
    data_card([
      data_card_row([
        data_card_labeled_bold_value({label: "Credito ref.", value: "33000012"}),
      ]),
      data_card_row([
        data_card_labeled_value({label: "Estatus", value: "Al Corriente"}),
      ]),
      data_card_space_row(),
      data_card_row([
        data_card_labeled_value({label: "Cantidad credito:", value: data_money("60000")}),
        data_card_labeled_value({label: "Fecha apertura:", value: data_date("2019-02-15")}),
        data_card_labeled_value({label: "Tasa interes:", value: data_percentage("20")}),
      ]),
      data_card_space_row(),
      data_card_row([
        data_card_labeled_value({label: "Monto total pagado:", value: data_money("40000")}),
        data_card_labeled_value({label: "Capital pendiente:", value: data_money("15599")}),
      ]),
      data_card_row([
        data_card_labeled_value({label: "Capital repagado:", value: data_money("25401")}),
        data_card_labeled_value({label: "Intereses pagados:", value: data_money("15599")}),
      ]),
      data_card_space_row(),
      data_card_row([
        data_card_labeled_value({label: "Pago base:", value: data_money("3199")}),
        data_card_labeled_value({label: "Sig fecha pago:", value: data_date("2019-12-20")}),
        
      ]),
      data_card_row([
        data_card_labeled_value({label: "Plazo:", value: data_multi("24", {s:"pago", d:"pagos"}) }),
        data_card_labeled_value({label: "Periodicidad:", value: "Mensual"}),
      ]),
      data_card_row([
        data_card_labeled_value({label: "Pagos realizados:", value: "4"}),
      ])
    ])
  ])

const credit_payments_table = () =>
  content_row([
    // paginated_table(), 
    // paginated_table(), 
  ])