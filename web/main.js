let txt = document.getElementById('txt')
let btn = document.getElementById('btn')
let logContainer = document.getElementById('log')

function callPy () {
  eel.main(txt.value)
}

eel.expose(add)
function add (arg) {
  btn.innerText = arg
  txt.value = ''
}

eel.expose(log)
function log (arg) {
  logContainer.innerHtml += txt.value + '<br>'
}
