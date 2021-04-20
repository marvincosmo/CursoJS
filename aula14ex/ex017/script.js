function tabuada() {
    let num = document.getElementById('txtn') // o valor escrito na área número
    let tab = window.document.getElementById('seltab') // os valores que vão aparecer na área do resultado
    if (num.value.length == 0) { // se a área número estiver vazia
        window.alert('Por favor, digite um número!') 
    } else {
        let n = Number(num.value) // o valor escrito no número é convertido para numérico
        let c = 1 // o valor inicial do multiplicador
        tab.innerHTML = ''// limpa a área de resposta antes de mostrar a nova
        while (c <= 10) { // enquanto o valor do multiplicador não chegar a 10...
            let item = document.createElement('option') // criação de item para área de resposta
            item.text = `${n} x ${c} = ${n*c}` // o texto do item da resposta
            item.value = `tab${c}` // esse valor serve para outras linguagens (ex: PHP)
            tab.appendChild(item) // inclui a resposta na área de resultado
            c++ // soma 1 ao multiplicador
        }
    }
}