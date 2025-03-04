radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    codigo = codigo - 1
    basic.showNumber(codigo)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(codigo)
})
input.onButtonPressed(Button.B, function () {
    codigo = codigo + 1
    basic.showNumber(codigo)
})
let codigo = 0
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(0)
})
