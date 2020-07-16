vit = 0
y = 0
lum = 0
vit1 = 0
y1 = 0
lum1 = 0

def on_forever():
    global vit, y, lum
    vit = randint(500, 3000)
    y = 0
    lum = 255
    for index in range(5):
        led.plot_brightness(0, y, lum)
        basic.pause(vit)
        y += 1
        lum += -50
        break
    for index2 in range(5):
        y += -1
        led.unplot(0, y)
basic.forever(on_forever)

def on_forever2():
    global vit1, y1, lum1
    vit1 = randint(500, 3000)
    y1 = 0
    lum1 = 255
    led.set_brightness(lum1)
    led.plot(1, y1)
    for index3 in range(5):
        y1 += 1
        lum1 += -50
        led.plot_brightness(0, y1, lum1)
        basic.pause(vit1)
        led.unplot(1, y1)
    led.unplot(1, y1)
basic.forever(on_forever2)
