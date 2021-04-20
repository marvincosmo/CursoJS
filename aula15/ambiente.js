let num = [5, 2, 8, 9, 3]
//console.log(`Nosso vetor é o ${num}`)
num.sort()
num.push(1)
console.log(num)
//console.log(`O vetor tem ${num.length} posições.`)
//console.log(`O primeiro valor do vetor é ${num[0]}.`)
//let pos = num.indexOf(8)
for(pos = 0; pos < num.length; pos++) {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}
if (pos == -1) {
    console.log('O valor não foi encontrado!')
}