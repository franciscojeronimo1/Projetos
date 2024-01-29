
const calcular = document.getElementById('calcular')


function imc () {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value 
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificaçao = ''
        
        if (valorIMC <18.5) {
            classificaçao = 'abaixo do peso.'
        }else if (valorIMC < 25) {
            classificaçao = 'com peso ideal. Parabéns!!!'
        }else if (valorIMC < 30) {
            classificaçao = 'levemente acima do peso.'
        }else if (valorIMC < 35) {
            classificaçao = 'com obesidade grau I.'
        }else if (valorIMC < 40) {
            classificaçao = 'com obesidade grau II'
        }else {
            classificaçao = 'com obesidade grau III. Cuidado!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificaçao}`
    }else {
        resultado.textContent = 'Preencha todos os campos'
    }

}

calcular.addEventListener('click', imc)