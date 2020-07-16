let vit = 0
let y = 0
let lum = 0
let vit1 = 0
let y1 = 0
let lum1 = 0
let vit2 = 0
let y2 = 0
let lum2 = 0
let vit3 = 0
let y3 = 0
let lum3 = 0
let vit4 = 0
let y4 = 0
let lum4 = 0
basic.forever(function () {
    vit = randint(500, 3000)
    y = 0
    lum = 255
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(0, y, lum)
        basic.pause(vit)
        y += 1
        lum += -50
    }
    for (let index = 0; index < 5; index++) {
        y += -1
        led.unplot(0, y)
    }
    basic.pause(500)
})
basic.forever(function () {
    vit1 = randint(500, 3000)
    y1 = 0
    lum1 = 255
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(1, y1, lum1)
        basic.pause(vit1)
        y1 += 1
        lum1 += -50
    }
    for (let index = 0; index < 5; index++) {
        y1 += -1
        led.unplot(1, y1)
    }
    basic.pause(500)
})
basic.forever(function () {
    vit2 = randint(500, 3000)
    y2 = 0
    lum2 = 255
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(2, y2, lum2)
        basic.pause(vit2)
        y2 += 1
        lum2 += -50
    }
    for (let index = 0; index < 5; index++) {
        y2 += -1
        led.unplot(2, y2)
    }
    basic.pause(500)
})
basic.forever(function () {
    vit3 = randint(500, 3000)
    y3 = 0
    lum3 = 255
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(3, y3, lum3)
        basic.pause(vit3)
        y3 += 1
        lum3 += -50
    }
    for (let index = 0; index < 5; index++) {
        y3 += -1
        led.unplot(3, y3)
    }
    basic.pause(500)
})
basic.forever(function () {
    vit4 = randint(500, 3000)
    y4 = 0
    lum4 = 255
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(4, y4, lum4)
        basic.pause(vit4)
        y4 += 1
        lum4 += -50
    }
    for (let index = 0; index < 5; index++) {
        y4 += -1
        led.unplot(4, y4)
    }
    basic.pause(500)
})
