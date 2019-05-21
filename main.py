import datetime
import eel

eel.init('web')
total = 0

d = ''
for i in datetime.datetime.now().strftime('%x'):
    if i == '/':
        d += '-'
    else:
        d += i

data = "Data/" + d


@eel.expose
def main(txt_val):
    global total
    if not txt_val.isalpha():
        total += eval(txt_val)
        eel.add(total)
        eel.log(txt_val + '<br>')
    else:
        print('[!] Invalid argument exeption: Dont input alphabets!')


@eel.expose
def reset():
    global total
    file_p = open(data, "a")
    file_p.write(str(total) + '\n')
    file_p.close()
    total = 0


eel.start('index.html', size=(400, 1000))
