let contar = 0
input.onButtonPressed(Button.A, function () {
    contar = randint(5, 10)
    basic.showNumber(contar)
    for (let index = 0; index <= contar; index++) {
        basic.showNumber(index)
        basic.pause(500)
        basic.clearScreen()
        for (let index2 = 0; index2 < index; index2++) {
            music.playTone(262, music.beat(BeatFraction.Half))
        }
    }
    basic.showString("A buscar!!!")
    music.playMelody("C5 B A A B G A F ", 120)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
