import datetime
import eel

eel.init('web')
sTotal = 0
pTotal = 0
currentTab = 'sale'

d = ''
for i in datetime.datetime.now().strftime('%x'):
    if i == '/':
        d += '-'
    else:
        d += i

sData = "Data/" + d
pData = "Data/Purchase/" + d


@eel.expose
def main(txt_val):
    global sTotal, pTotal, currentTab
    if not txt_val.isalpha():
        if currentTab == 'sale':
            sTotal += eval(txt_val)
            eel.add(sTotal)
        else:
            pTotal += eval(txt_val)
            eel.add(pTotal)

        eel.log(txt_val + '<br>')
    else:
        print('[!] Invalid argument exeption: Dont input alphabets!')


@eel.expose
def reset(sellerName):
    global sTotal, pTotal, currentTab

    if currentTab == 'sale':
        file = open(sData, "a")
        file.write(str(sTotal) + '\n')
        sTotal = 0
    else:
        file = open(pData, "a")
        file.write(sellerName + ' : ' + str(pTotal) + '\n')
        pTotal = 0

    file.close()


@eel.expose
def current_tab(arg):
    global currentTab
    currentTab = arg


eel.start('index.html', size=(400, 1000), options={'mode' : 'electron'})
