function verificaridade() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var txtanonasc = document.querySelector('input#txtanonasc')
    var idade = anoatual - Number(txtanonasc.value)
    var res = document.querySelector('div#res')


    if (txtanonasc.value.length == 0 || idade <= 0) {
        alert('[ERRO] Favor preencha corretamente os campos!')
    } else {

        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var foto = document.createElement('img')
        foto.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 12) {
                foto.setAttribute('src', 'homem-crianca.png')
            } else if (idade <= 25) {
                foto.setAttribute('src', 'homem-jovem.png')
            } else if (idade <= 50) {
                foto.setAttribute('src', 'homem-adulto.png')
            } else
                foto.setAttribute('src', 'homem-idoso.png')

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <= 12) {
                foto.setAttribute('src', 'mulher-crianca.png')
            } else if (idade <= 25) {
                foto.setAttribute('src', 'mulher-jovem.png')
            } else if (idade <= 50) {
                foto.setAttribute('src', 'mulher-adulta.png')
            } else
                foto.setAttribute('src', 'mulher-idosa.png')

        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `<p><strong>${genero}</strong> de <strong>${idade}</strong> anos</p>`
    res.appendChild(foto)
}