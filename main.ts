joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendNumber(2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(7)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(6)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(5)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendNumber(1)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendNumber(0)
})
let Y = 0
let X = 0
joystickbit.initJoystickBit()
joystickbit.Vibration_Motor(100)
radio.setGroup(2)
basic.forever(function () {
    radio.sendValue("x", joystickbit.getRockerValue(joystickbit.rockerType.X))
    radio.sendValue("y", joystickbit.getRockerValue(joystickbit.rockerType.Y))
    X = Math.round(Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, 4, 0))
    Y = Math.round(Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 0, 1023, 4, 0))
    led.plot(X, Y)
    basic.pause(100)
    led.unplot(X, Y)
})
