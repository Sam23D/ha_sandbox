import { h } from "../../hyperapp.js"

export const attributes_card = ()=>
  h('div', { class: `attributes_card`}, [
    attributes_card_block({label: "Referencia", value: "33000012"}),
    attributes_card_block({label: "Monto Credito", value: "$60,000"}),
    attributes_card_block({label: "Tasa interes", value: "20%"}),
    attributes_card_block({label: "Plazo", value: "24 pagos"}),
  ])

const attributes_card_block = ({label, value})=>
  h('div', { class: `attributes_card_block`}, [
    h('label', { class: `attributes_card_label`}, [label]),
    h('label', { class: `attributes_card_value`}, [value])
  ])

export const data_card = () =>
  h('div', { class: `data_card`}, [
    data_card_row([
      data_card_labeled_bold_value({label: "Credito ref.", value: "33000012"}),
    ]),
    data_card_space_row(),
    data_card_row([
      data_card_labeled_value({label: "Cantidad credito:", value: "$ 60,000"}),
      data_card_labeled_value({label: "Fecha apertura:", value: "20 Feb 2019"}),
      data_card_labeled_value({label: "Tasa interes:", value: "20%"}),
    ]),
    data_card_space_row(),
    data_card_row([
      data_card_labeled_value({label: "Monto total pagado:", value: "$ 40,000"}),
      data_card_labeled_value({label: "Capital pendiente:", value: "$ 15,599"}),
    ]),
    data_card_row([
      data_card_labeled_value({label: "Capital repagado:", value: "$ 25,401"}),
      data_card_labeled_value({label: "Intereses pagados:", value: "$ 15,599"}),
    ]),
    data_card_space_row(),
    data_card_row([
      data_card_labeled_value({label: "Pago base:", value: "$ 3,199"}),
      data_card_labeled_value({label: "Sig fecha pago:", value: "20 Dic 2019"}),
      
    ]),
    data_card_row([
      data_card_labeled_value({label: "Pagos realizados", value: "4"}),
      data_card_labeled_value({label: "Periodicidad:", value: "Mensual"}),
    ]),
    data_card_space_row(),
    data_card_row([
      data_card_bold_label({label: "Liquidar"}),
      data_card_labeled_short_value({label: "Monto:", value: "Mensual"}),
      data_card_labeled_short_value({label: "Capital:", value: "Mensual"}),
      data_card_labeled_short_value({label: "Interes:", value: "Mensual"}),
      data_card_labeled_short_value({label: "IVA:", value: "Mensual"}),
    ]),
    data_card_space_row(),
    data_card_row([
      data_card_bold_label({label: "Corriente"}),
      data_card_labeled_short_value({label: "Monto:", value: "Mensual"}),
      data_card_labeled_short_value({label: "Capital:", value: "Mensual"}),
      data_card_labeled_short_value({label: "Interes:", value: "Mensual"}),
      data_card_labeled_short_value({label: "IVA:", value: "Mensual"}),
    ]),
  ])

const data_card_space_row = ()=>
  h('div', { class: `data_card_space_row`}, [])

const data_card_row = (children)=>
  h('div', { class: `data_card_row `}, children)

const data_card_labeled_bold_value = ({label, value}) =>
  h('span', { class: `data_card_labeled_bold_value`}, [
    h('label', { class: ` `}, [ label ]),
    h('span', { class: ` `}, [ value ]),
  ])

const data_card_labeled_value_spacer = () =>
  h('div', { class: `data_card_labeled_value_spacer`}, [])

const data_card_bold_label = ({label}) =>
  h('div', { class: `data_card_bold_label`}, [label])

const data_card_labeled_value = ({label, value}) =>
  h('span', { class: `data_card_labeled_value`}, [
    h('label', { class: ` `}, [ label ]),
    h('span', { class: ` `}, [ value ]),
  ])

const data_card_labeled_short_value = ({label, value}) =>
  h('span', { class: `data_card_labeled_short_value`}, [
    h('label', { class: ` `}, [ label ]),
    h('span', { class: ` `}, [ value ]),
  ])