import { h, app } from "./js/hyperapp.js"
import { side_bar } from "./js/AntDesign/SideMenu.js"
import { layout } from "./js/AntDesign/Layout.js"
import { content_container, content_row } from "./js/AntDesign/ContentContainer.js"
import { paginated_table } from "./js/AntDesign/components/tables.js"
import { attributes_card, data_card } from "./js/AntDesign/components/cards.js"


app({
  init: 0,
  view: state =>
    layout([
      side_bar(),
      main_view()
    ]),
  node: document.getElementById("app")
})

const main_view = () =>
  content_container([
    content_row([
      attributes_card(),
    ]),
    content_row([
      data_card()
    ]),
    content_row([
      paginated_table(),
      paginated_table(),
    ]),
  ])