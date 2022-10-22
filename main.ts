let random_number = 0
input.onButtonPressed(Button.A, function () {
    if (random_number == 1) {
        basic.showString("MICROBIT SAYS Touch your hair")
        basic.pause(2000)
    } else if (random_number == 2) {
        basic.showString("MICROBIT SAYS")
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
    } else if (random_number == 3) {
        basic.showString("MICROBIT SAYS JUMP")
        basic.pause(2000)
    } else if (random_number == 4) {
        basic.showString("MICROBIT SAYS WAVE")
        basic.pause(2000)
    } else if (random_number == 5) {
        basic.showString("MICROBIT SAYS Dab")
        basic.showString("" + (images.createBigImage(`
            # # . # # # . # # #
            # . # # . # . # . #
            # . # # # # . # # #
            # . # # . # . # . #
            # # . # . # . # # #
            `)))
        basic.pause(2000)
    } else {
        basic.showString("MICROBIT SAYS DANCE")
        basic.pause(2000)
    }
    random_number = randint(1, 6)
})
input.onButtonPressed(Button.B, function () {
    if (random_number == 1) {
        basic.showString("" + (images.createBigImage(`
            # # . # # # . # # #
            # . . . # . . . # .
            # # . . # . . . # .
            . # . . # . . . # .
            # # . # # # . . # .
            `)))
        basic.pause(2000)
    } else if (random_number == 2) {
        basic.showString("FAV MOVIE")
        basic.pause(2000)
    } else if (random_number == 3) {
        basic.showString("SHRUG")
        basic.pause(2000)
    } else if (random_number == 4) {
        basic.showString("Name a job in STEM")
        basic.pause(2000)
    } else if (random_number == 5) {
        basic.showString("HIGH FIVE")
        basic.pause(2000)
    } else {
        basic.showString("SNAP 5x")
        basic.pause(2000)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.No)
    basic.showString("INCORRECT")
    basic.pause(2000)
})
