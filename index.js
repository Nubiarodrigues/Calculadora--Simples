function outcome() {
    let numero1 = Number(document.getElementById('input1').value)    
    let numero2 = Number(document.getElementById('input2').value)    

    total = 0

    if (document.getElementById('adição').checked)
        total = numero1 + numero2 
    else if (document.getElementById('subtração').checked)
        total = numero1 - numero2
    else if (document.getElementById('multiplicação').checked)
        total = numero1 * numero2
    else 
        total = numero1 / numero2

    document.getElementById('resultado').innerHTML = 'Resultado: ' + String(total) 
}