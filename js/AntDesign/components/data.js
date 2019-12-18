import { h } from "../../hyperapp.js"

export const data_percentage = (value)=>
  h('span', { class: `data_percentage`}, [
    value,
    h('span', { class: ` `}, ["%"]),
  ])

let nv_opts = { fix: 2 }
export const data_money = (amount, options=nv_opts)=>{
  let value = parseFloat(amount).toFixed(options.fix)
  return h('span', { class: `data_money`}, [
    h('span', { class: ``}, ["$"]),
    value,
  ])
}

export const data_multi = (amount, {s,d})=>{
  if(parseInt(amount) == 1 ){
    return h('span', { class: `data_multi`}, [amount, 
      h('span', { class: `data_multi_label`}, [s])
    ])
  }else{
    return h('span', { class: `data_multi`}, [amount, 
      h('span', { class: `data_multi_label`}, [d])
    ])
  }
}

export const data_date = (value) =>{
  if( typeof value !== "string" ){
    value = "----------"
  }
  return h('span', { class: `data_date` }, [
    (value ? value.substring(8,11): ""),
    h('span', { class: ``}, [value ? month_number_to_shortcut(value.substring(5,7)): "-"]),
    (value ? value.substring(0,4): ""),
  ])
  }
  
const month_number_to_shortcut=(month_day) =>{
  switch(parseInt(month_day)){
    case 1: return "Ene"; 
    case 2: return "Feb"; 
    case 3: return "Mar"; 
    case 4: return "Abr"; 
    case 5: return "May"; 
    case 6: return "Jun"; 
    case 7: return "Jul"; 
    case 8: return "Ago"; 
    case 9: return "Sep"; 
    case 10: return "Oct"; 
    case 11: return "Nov"; 
    case 12: return "Dic"; 
    default: return "-"
  }
}
