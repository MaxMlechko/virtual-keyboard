let container = document.createElement("div")
let textInput = document.createElement("textarea")
let virtual_keyboard = document.createElement("div")
const list  = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&larr;'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';' , `'`, '&crarr;'],
    ['Shift', 'z' , 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '__', 'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;']
]

const rus = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&larr;',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж' , `э`, '&crarr;',
    'Shift', 'я' , 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift',
    'Ctrl', 'Win', 'Alt', '__', 'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;'
]

const eng = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&larr;',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';' , `'`, '&crarr;',
    'Shift', 'z' , 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift',
    'Ctrl', 'Win', 'Alt', '__', 'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;'
]

const shiftEng = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '&larr;',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'DEL',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':' , `"`, '&crarr;',
    'Shift', 'Z' , 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift',
    'Ctrl', 'Win', 'Alt', '__', 'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;'
]

const letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
const shiftKeys = ['~', '!', '@', '#', '$', '%', '^', `&`, '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?']
let divs = []
let caps
let language = 'en'

function creatingDiv(arr){
    let div_row = []
    let shift_count = 1
    let ctrl_count = 1
    let alt_count = 1
    for(let i = 0; i < arr.length; i++){
        let key_div = document.createElement("div")
        key_div.innerHTML = arr[i]
        let text = key_div.innerHTML
        key_div.classList.toggle('key')
        switch(text){
            case '__':
                key_div.classList.toggle('space')
                key_div.setAttribute('id', ' ')
            break

            case '▲':
                key_div.setAttribute('id', 'ArrowUp')
                break

            case '◄':
                key_div.setAttribute('id', 'ArrowLeft')
                break

            case '▼':
                key_div.setAttribute('id', 'ArrowDown')
                break

            case '►':
                key_div.setAttribute('id', 'ArrowRight')
                break

            case 'DEL':
                key_div.classList.toggle('space')
                key_div.setAttribute('id', 'Delete')
            break

            case 'Win':
                key_div.setAttribute('id', 'Meta')
            break

            case 'Ctrl':
                if(ctrl_count == 1){
                    key_div.setAttribute('id', 'ControlLeft')
                    ctrl_count++
                }
                else{
                    key_div.setAttribute('id', 'ControlRight')
                }
            break

            case 'Alt':
                if(alt_count == 1){
                    key_div.setAttribute('id', 'AltLeft')
                    alt_count++
                }
                else{
                    key_div.setAttribute('id', 'AltRight')
                }
            break

            case 'Shift':
                if(shift_count == 1){
                    key_div.classList.toggle('first_shift')
                    key_div.setAttribute('id', 'ShiftLeft')
                    shift_count++
                }
                else{
                    key_div.classList.toggle('second_shift')
                    key_div.setAttribute('id', 'ShiftRight')
                }
                break
                
            case 'Tab':
                key_div.classList.toggle('tab')
                key_div.setAttribute('id', 'Tab')
                break

            case '←':
                key_div.classList.toggle('backspace')
                key_div.setAttribute('id', 'Backspace')
                break
            
            case 'Caps Lock':
                key_div.classList.toggle('caps')
                break

            case '↵':
                key_div.classList.toggle('enter')
                key_div.setAttribute('id', 'Enter')
                break

            default:
                key_div.setAttribute('id', `${text}`)
        }
        div_row.push(key_div)
    }
    divs.push(div_row)
}

function placingKey(arr){
    let keyboard_row = document.createElement("div")
    keyboard_row.className = 'keyboard_row'
    for(let i = 0; i < arr.length; i++){
        keyboard_row.appendChild(arr[i])
    }
    virtual_keyboard.appendChild(keyboard_row)
}

function addButtonAnimation(event){
    if(event.target.innerHTML == 'Shift'){
        changeCase()
        document.getElementById(`${event.target.id}`).classList.toggle('button_down')
    }
    else{
        event.target.classList.add('button_down')
    }
}

function removeButtonAnimation(event){
    if(event.target.innerHTML == 'Shift'){
    }
    else{
        event.target.classList.remove('button_down')
    }
}

function changeCase(){
    if(caps){
        keys.forEach(elem => {
            for(let i = 0; i < letters.length; i++){
                if(elem.innerHTML == letters[i].toUpperCase()){
                    elem.innerHTML = elem.innerHTML.toLowerCase()
                }
            }
        })
        caps = false
    }
    else{
        keys.forEach(elem => {
            for(let i =0; i < letters.length; i++){
                if(elem.innerHTML == letters[i]){
                    elem.innerHTML = elem.innerHTML.toUpperCase()
                }
            }
        })
        caps = true
    }
}

function inputCharacter(key){
    let innerText = key.srcElement.innerHTML
    switch(innerText){
        case '__':
            textInput.value += ' '
            break
        
        case '&amp;':
            textInput.value += '&'
            break

        case '&lt;':
            textInput.value += '<'
            break

        case '&gt;':
            textInput.value += '>'
            break

        case 'Tab':
            textInput.value += '    '
            break

        case '←':
        case 'DEL':
            textInput.value = textInput.value.substring(0, textInput.value.length-1)
            break
        
        case '↵':
            textInput.value += '\n'
            break
        
        case 'Alt':
        case 'Ctrl':
            break

        case 'Shift':
            changeShiftKeys()
            break
        
        case 'CapsLock':
            changeCase()
            break

        default:
            textInput.value += innerText
    }
}

function changeShiftKeys(){
    if(keys[1].innerHTML == '1'){
        for(let i = 0; i < keys.length; i++){
            keys[i].innerHTML = shiftEng[i]
        }
    }
    else{
        for(let i = 0; i < keys.length; i++){
            keys[i].innerHTML = eng[i]
        }
    }
}

function addKeyAnimation(elem){
    switch(elem.key){
        case 'Shift':
            changeCase()
            changeShiftKeys()
            document.getElementById(`${elem.code}`).classList.toggle('button_down')
            break

        case 'Alt':
        case 'Control':
            document.getElementById(`${elem.code}`).classList.add('button_down')
            break

        case "CapsLock":
            changeCase()
            document.getElementById(`${elem.key}`).classList.add('button_down')
            break

        case 'Tab':
            textInput.value += '    '
            document.getElementById(`${elem.key}`).classList.add('button_down')
            break
        
        case 'Enter':
        case 'Backspace':
        case 'Delete':
        case 'Meta':
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
            document.getElementById(`${elem.key}`).classList.add('button_down')
            break

        default:
            document.getElementById(`${elem.key.toLowerCase()}`).classList.add('button_down')
    }
}

function removeKeyAnimation(elem){
    switch(elem.key){
        case 'Shift':
            break

        case 'Alt':
        case 'Control':
            document.getElementById(`${elem.code}`).classList.remove('button_down')
            break

        case "CapsLock":
            document.getElementById(`${elem.key}`).classList.remove('button_down')
            break

        case 'Tab':
        case 'Enter':
        case 'Backspace':
        case 'Delete':
        case 'Meta':
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
            document.getElementById(`${elem.key}`).classList.remove('button_down')
            break

        default:
            document.getElementById(`${elem.key.toLowerCase()}`).classList.remove('button_down')
    }
}

function changeLanguage(lang){
    if(lang == 'ru'){
        for(let i = 0; i < keys.length; i++){
            keys[i].innerHTML = rus[i]
        }
    }
    else{
        for(let i = 0; i < keys.length; i++){
            keys[i].innerHTML = eng[i]
        }
    }
}

container.className = 'container'
textInput.className = 'text_field'
virtual_keyboard.className = 'virtual_keyboard'
textInput.setAttribute("rows", "10")
textInput.setAttribute("autofocus", "autofocus")
container.appendChild(textInput)
container.appendChild(virtual_keyboard)
document.querySelector("body").appendChild(container)
list.forEach(creatingDiv)
divs.forEach(placingKey)
let keys = document.querySelectorAll('.key')
keys.forEach(elem => elem.addEventListener("mousedown", addButtonAnimation))
keys.forEach(elem => elem.addEventListener("mouseup", removeButtonAnimation))
keys.forEach(elem => elem.addEventListener("click", inputCharacter))
document.addEventListener('keydown', function(elem){addKeyAnimation(elem)})
document.addEventListener('keyup', function(elem) {removeKeyAnimation(elem)})
document.addEventListener('keydown', function(event) {
    if (event.key == 'Shift' && event.altKey) {
        if(language == 'en'){
            language = 'ru'
        }
        else{
            language = 'en'
        }
        changeLanguage(language)
    }
  })