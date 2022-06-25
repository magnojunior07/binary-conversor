const binButton = document.getElementById('btn-bin')
const decButton = document.getElementById('btn-dec')
const number = document.getElementById('input')
const result = document.getElementById('result')

function convertToBin(number) {
    let restArr = []
    let rest
    let binaryString = ''
    
    while(number > 0) {
        rest = Math.floor(number % 2)
        restArr.push(rest)
        number = Math.floor(number / 2) 
    }

    while(restArr.length > 0) {
        binaryString += restArr.pop().toString()
    }

    result.innerHTML = `<p>${binaryString}</p>`

}

function convertToDec(bin) {
    let binArr = bin.toString().split('')
    let decNumber = 0
    
    while(binArr.length > 0) {
        decNumber += parseInt(binArr[0]) * Math.pow( 2, binArr.length - 1)
        binArr.shift()
    }
    
    result.innerHTML = `<p>${decNumber}</p>`
}

binButton.addEventListener('click', () => convertToBin(number.value))
decButton.addEventListener('click', () => convertToDec(number.value))