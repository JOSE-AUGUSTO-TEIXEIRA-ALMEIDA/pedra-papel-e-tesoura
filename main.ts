let x = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    x = randint(0, 2)
    if (x == 0) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(1000)
        music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
    } else if (x == 1) {
        basic.showIcon(IconNames.Square)
        basic.pause(1000)
        music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
    }
})
