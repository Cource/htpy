let txt = document.getElementById('txt')
let btn = document.getElementById('btn')
let logContainer = document.getElementById('log')

function callPy () {
  eel.main(txt.value)
}

eel.expose(add)
function add (total) {
  btn.innerHTML = '<img src="images/rs.svg">' + total
  txt.value = ''
}

eel.expose(log)
function log (arg) {
  logContainer.innerHTML += arg
}
