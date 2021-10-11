let contar = 0
input.onButtonPressed(Button.A, function () {
    contar = randint(5, 10)
    basic.showNumber(contar)
    for (let index = 0; index <= contar; index++) {
        basic.showNumber(index)
        for (let index2 = 0; index2 < index; index2++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
        basic.clearScreen()
    }
    basic.showString("A buscar!!!")
    music.playMelody("C5 B A A B G A F ", 120)
    basic.clearScreen()
})
