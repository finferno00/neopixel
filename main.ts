let ring = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB_RGB)
basic.forever(function () {
    for (let index = 0; index <= 23; index++) {
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
        ring.show()
        basic.pause(50)
        ring.setPixelColor(index, neopixel.rgb(16, 16, 16))
        ring.show()
    }
})
