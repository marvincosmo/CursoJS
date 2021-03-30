function carregar() {
	var msg = window.document.getElementById('msg')
	var img = window.document.getElementById('imagem')
	var data = new Date()
	var hora = data.getHours()
	//var hora = 22 // Essa linha força as mudanças da página a partir da hora escrita.
	msg.innerHTML = `Agora são ${hora} horas.`
	if (hora >= 0 && hora < 12) {
		msg.innerHTML += '<br>Bom dia!'
		img.src = 'manha-redondo.png'
		document.body.style.background = '#e2cd9f'
	} else if (hora >= 12 && hora <= 18) {
		msg.innerHTML += '<br>Boa tarde!'
		img.src = 'tarde-redondo.png'
		document.body.style.background = '#b9846f'
	} else {
		msg.innerHTML += '<br>Boa noite!'
		img.src = 'noite-redondo.png'
		document.body.style.background = '#515154'
	}
}