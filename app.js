/* Simulador dos operadores lógicos (And, Or e Not)
* @author Allan Vítor
*/

let receive //Essa variável apresenta o parâmetro(vlor) recebido do html

//As variáveis abaixo são usadas para identificar se o interruptor está ligado ou desligdo (false = ligado | true = desligado)
let sw1 = false
let sw2 = false
let broken = false

function sw(receive) {
    // console.log(receive) //apoio a lógica

    // Lógica dos interruptores ↓
    if(receive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    } else if(receive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false
    }
    if(receive === 2 && sw2 === false) {
        document.getElementById('sw2').src = "img/swon.png"
        sw2 = true
    } else if(receive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }
    

    //Lógica para quebrar a lâmpada ↓
    if (receive === 3) {
    // A linha abaixo cria um objeto usando a classe "Audio"
    let som = new Audio()
    console.log (typeof(som))
    som.src = "sound/glassbreaking.wav"
    som.play()
    // Trocar a imagem(Manipulação do DOM)
    document.getElementById('lamp').src = "img/broken.jpg"
    broken = true
}

//Lógico do Operador (AND)
if (broken !== true) {
    if (sw1 === true && sw2 === true) {
        document.getElementById('lamp').src = "img/on.jpg"
    } else {
        document.getElementById('lamp').src = "img/off.jpg"
        }
    }
}