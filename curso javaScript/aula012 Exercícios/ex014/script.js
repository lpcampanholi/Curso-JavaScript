function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = 'rgb(46, 117, 67)'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#ab7748'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background ='#00469f'
    }
}
