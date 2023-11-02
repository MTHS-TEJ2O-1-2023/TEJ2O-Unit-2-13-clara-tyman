/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Clara
 * Created on: Oct 2023
 * This program counts down from 4 to 0 and lights up neopixels
*/

let loopCounter: number = 4
let neopixelStrip: neopixel.Strip = null

basic.showIcon(IconNames.Silly)
basic.clearScreen()
basic.pause(500)

// cleanup
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

// press "A" button
input.onButtonPressed(Button.A, function (){
  // setup
  basic.clearScreen()

  neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.show()

  // loop
  while (loopCounter >= 0) {
    basic.pause(500)
    basic.showNumber(loopCounter)
    neopixelStrip.setPixelColor(loopCounter, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    loopCounter = loopCounter - 1
  }
})
