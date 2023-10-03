const keys = document.querySelectorAll('.key')
const checkbox = document.querySelector('.checkbox__keys')
const switcher = document.querySelector('.switcher')
const keySection = document.querySelector('.piano__key')

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`)
    audio.play()
}

const handleMousedown = (key) => {
    playNote(key.getAttribute('data-note'))

    if (key.className.includes('black')) {
        key.classList.add('black--pressed')
        return;
    }

    key.style.background = '#ddd'
    }

    const handleMouseUp = (key) => {
        if (key.className.includes('black')) {
            key.classList.remove('black--pressed')
        return;
    }

        key.style.background = 'white'
}

keys.forEach((key) => {

    key.addEventListener('mousedown', () => handleMousedown (key))

    key.addEventListener('mouseup', () => handleMouseUp (key))
})

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active')
        keySection.classList.remove('disabled-keys')
        return
    }
    switcher.classList.remove('switcher--active')
    keySection.classList.add('disabled-keys')
})

const keyDownMapper = {
    "Tab": () => handleMousedown(keys[0]),
    "1": () => handleMousedown(keys[1]),
    "q": () => handleMousedown(keys[2]),
    "2": () => handleMousedown(keys[3]),
    "w": () => handleMousedown(keys[4]),
    "e": () => handleMousedown(keys[5]),
    "4": () => handleMousedown(keys[6]),
    "r": () => handleMousedown(keys[7]),
    "5": () => handleMousedown(keys[8]),
    "t": () => handleMousedown(keys[9]),
    "6": () => handleMousedown(keys[10]),
    "y": () => handleMousedown(keys[11]),
    "u": () => handleMousedown(keys[12]),
    "8": () => handleMousedown(keys[13]),
    "i": () => handleMousedown(keys[14]),
    "9": () => handleMousedown(keys[15]),
    "o": () => handleMousedown(keys[16]),
    "p": () => handleMousedown(keys[17]),
    "-": () => handleMousedown(keys[18]),
    "[": () => handleMousedown(keys[19]),
    "=": () => handleMousedown(keys[20]),
    "]": () => handleMousedown(keys[21]),
    "x": () => handleMousedown(keys[22]),
    "z": () => handleMousedown(keys[23]),
}

const keyUpMapper = {
    "Tab": () => handleMouseUp(keys[0]),
    "1": () => handleMouseUp(keys[1]),
    "q": () => handleMouseUp(keys[2]),
    "2": () => handleMouseUp(keys[3]),
    "w": () => handleMouseUp(keys[4]),
    "e": () => handleMouseUp(keys[5]),
    "4": () => handleMouseUp(keys[6]),
    "r": () => handleMouseUp(keys[7]),
    "5": () => handleMouseUp(keys[8]),
    "t": () => handleMouseUp(keys[9]),
    "6": () => handleMouseUp(keys[10]),
    "y": () => handleMouseUp(keys[11]),
    "u": () => handleMouseUp(keys[12]),
    "8": () => handleMouseUp(keys[13]),
    "i": () => handleMouseUp(keys[14]),
    "9": () => handleMouseUp(keys[15]),
    "o": () => handleMouseUp(keys[16]),
    "p": () => handleMouseUp(keys[17]),
    "-": () => handleMouseUp(keys[18]),
    "[": () => handleMouseUp(keys[19]),
    "=": () => handleMouseUp(keys[20]),
    "]": () => handleMouseUp(keys[21]),
    "x": () => handleMouseUp(keys[22]),
    "z": () => handleMouseUp(keys[23]),
   
   }
    document.addEventListener('keydown', (event) => {
        event.preventDefault()
        keyDownMapper[event.key]()
    })

    document.addEventListener('keyup', (event) => {
        keyUpMapper[event.key]()
    })