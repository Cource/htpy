let amt = document.getElementById('amt')
let sellerName = document.getElementById('name')
let go = document.getElementById('go')
let sLog = document.getElementById('saleLog')
let pLog = document.getElementById('purchaseLog')
let salesTab = document.getElementById('sales')
let purchaseTab = document.getElementById('purchase')
let isOnSale = true

function callPy () {
  eel.main(amt.value)
}

function isSale(arg) {
  isOnSale = arg
  if (isOnSale) {
    eel.current_tab('sale')
    salesTab.style.backgroundColor = '#e0e0e0'
    salesTab.style.color = '#424242'
    purchaseTab.style.backgroundColor = '#eeeeee'
    purchaseTab.style.color = '#757575'
    pLog.hidden = true
    sLog.hidden = false
    sellerName.hidden = true
  } else {
    eel.current_tab('purchase')
    salesTab.style.backgroundColor = '#eeeeee'
    salesTab.style.color = '#757575'
    purchaseTab.style.backgroundColor = '#e0e0e0'
    purchaseTab.style.color = '#424242'
    sLog.hidden = true
    pLog.hidden = false
    sellerName.hidden = false
  }
}

eel.expose(add)
function add (total) {
  go.innerHTML = '<img src="images/rs.svg">' + total
  amt.value = ''
}

eel.expose(log)
function log (arg) {
  if (isOnSale) {
    sLog.innerHTML += arg
  } else {
    pLog.innerHTML += arg
  }
}

function reset() {
  go.innerHTML = '<img src="images/plus.svg">'
  amt.value = ''

  if (isOnSale) {
    sLog.innerHTML = ''
  }else {
    pLog.innerHTML = ''
  }

  eel.reset()
}
