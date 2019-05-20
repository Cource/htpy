import eel

eel.init('web')
total = 0


@eel.expose
def main(txt_val):
    global total
    if not txt_val.isalpha():
        total += eval(txt_val)
        eel.add(total)
        eel.log(txt_val + '<br>')
    else:
        print('[!]Invalid argument exeption: Dont input alphabets!')

eel.start('index.html', size=(400, 1000))
