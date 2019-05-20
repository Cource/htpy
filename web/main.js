let txt = document.getElementById('txt')
let go = document.getElementById('go')
let logContainer = document.getElementById('log')

function callPy () {
  eel.main(txt.value)
}

eel.expose(add)
function add (total) {
  go.innerHTML = '<img src="images/rs.svg">' + total
  txt.value = ''
}

eel.expose(log)
function log (arg) {
  logContainer.innerHTML += arg
}

function reset() {
  go.innerHTML = '<img src="images/plus.svg">'
  txt.value = ''
  logContainer.innerHTML = ''
  eel.reset()
}
