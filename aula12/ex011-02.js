var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
	console.log('Não vota')
} else if (idade < 18 || idade > 70) { // O que corresponde ao if (idade >= 16 && idade < 18)
	console.log('Voto opcional')
} else { // O que corresponde ao else if (idade >= 18)
	console.log('Voto obrigatório')
}