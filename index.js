let container = document.createElement("div")
let textInput = document.createElement("textarea")
let virtual_keyboard = document.createElement("div")
let list  =[
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&larr;'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL'],
    ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';' , `'`, '&crarr;'],
    ['Shift', 'z' , 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '__', 'Alt', 'Ctrl', '&#9668;', '&#9660;', '&#9658;']
]
let divs = []


function creatingDiv(arr){
    let div_row = []
    let first_shift = 1
    for(let i = 0; i < arr.length; i++){
        let key_div = document.createElement("div")
        key_div.innerHTML = arr[i]
        key_div.className = 'key'
        let text = key_div.innerHTML
        switch(text){
            case '__':
                key_div.classList.toggle('space')
            break

            case 'Shift':
                if(first_shift == 1){
                    key_div.classList.toggle('first_shift')
                    first_shift++
                }
                else{
                    key_div.classList.toggle('second_shift')
                }
                break
                
            case 'tab':
            case '←':
                key_div.classList.toggle('tab_backspace')
                break
            
            case 'caps':
            case '↵':
                key_div.classList.toggle('enter_caps')
                break
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

function addKeyAnimation(event){
    event.target.classList.add('button_down')
}

function removeKeyAnimation(event){
    event.target.classList.remove('button_down')
}

container.className = 'container'
textInput.className = 'text_field'
virtual_keyboard.className = 'virtual_keyboard'
textInput.setAttribute("rows", "15")
textInput.setAttribute("autofocus", "autofocus")
container.appendChild(textInput)
container.appendChild(virtual_keyboard)
document.querySelector("body").appendChild(container)
list.forEach(creatingDiv)
divs.forEach(placingKey)
let keys = document.querySelectorAll('.key')
keys.forEach(elem => elem.addEventListener("mousedown", addKeyAnimation))
keys.forEach(elem => elem.addEventListener("mouseup", removeKeyAnimation))