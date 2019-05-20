import eel

eel.init('web')
total = 0


@eel.expose
def main(txt_val):
    global total
    total += eval(txt_val)
    eel.add(total)
    eel.log(txt_val + '<br>')


eel.start('index.html', size=(400, 1000))
