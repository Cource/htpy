let txt = document.getElementById('txt')
let btn = document.getElementById('btn')
let log = document.getElementById('log')

function add() {
  btn.innerText += eval(txt.value)
  log.innerHtml += txt.value + '<br>'
  txt.value = ''
}
