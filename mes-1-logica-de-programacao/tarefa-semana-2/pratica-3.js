function numeroAleatorio(){
    const min = 0
    const max = 10000
    const numero = Math.random()*(max - min) + min
    //const numeroInteiro = parseInt(numero)

    return parseInt(numero)
}

console.log(numeroAleatorio())