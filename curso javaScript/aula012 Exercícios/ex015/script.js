function verificaridade() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var fanonasc = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fanonasc.value.length == 0 || Number(fanonasc.value) > anoatual) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = anoatual - Number(fanonasc.value)
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.</p>`
        res.appendChild(img)
    }
}



