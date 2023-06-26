function contar() {
    //criar variáveis para receber os valores dos inputs:
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')

    if (inicio.value.length==0 || fim.value.length==0 || passo.value.length==0) {
        alert('Por favor preencha todos os campos.')
        res.innerHTML = 'Impossível contar!'
    } else {
        if (Number(passo.value)==0) {
            passo.value = '1'
            alert(`Passo inválido! Considerando PASSO ${passo.value}`)
        }

        res.innerHTML = `Contando:</br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (i<f) {
            // Contagem crescente:
            for (let c=i;c<=f;c+=p) {
                res.innerHTML += `${c}\u{1F449}`
            }     
        } else {
            // Contagem regressiva:
            for (let c=i;c>=f;c-=p) {
                res.innerHTML += `${c}\u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }   
}
    




