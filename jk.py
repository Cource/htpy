import eel

eel.init('web')
total = 0


@eel.expose
def main(arg):
    global total
    total += eval(arg)
    eel.add(sum)
    eel.log(arg)


eel.start('index.html', size=(400, 1000))
