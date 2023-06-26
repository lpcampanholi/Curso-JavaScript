

function mostravetor() {
    let res = document.querySelector('div#res')
    res.innerHTML = `Vetor:`    
    for (let c=0; c < itens.length; c++) {
        res.innerHTML += `<p>${itens[c]}[${c}]</p>`
    }
}


let itens = [] //vetor lista dos itens

function adicionar() {
    let num = document.querySelector('input#txtn')
    let n = Number(num.value)
    
    if (n<=0 || n>100) { //Valida se está vazio ou no intervalo entre 1 e 100
        alert(`Insira um número entre 1 e 100`)
        num.focus()
    } else if (itens.indexOf(n) !== -1) { //Valida se o número já foi inserido ou não
        alert('Valor já encontrado na lista!')
        num.value = ''
        num.focus()
    } else {
        let lista = document.querySelector('select#selNum')
        let novoitem = document.createElement('option')
        novoitem.text = `Número ${n} adicionado`
        lista.appendChild(novoitem)
        itens.push(n)
        num.value = ''
        num.focus()
        lista.size =(`${itens.length}`)
        //mostravetor()
        let res = document.querySelector('div#res')
        res.innerHTML =''
    }
}

function finalizar() {
    if (!itens.length) { //Validação vetor vazio
        alert(`Adicione valores antes de finalizar!`)
    } else {
        let res = document.querySelector('div#res')
        let max = Math.max(...itens)
        let min = Math.min(...itens)
        let soma = 0
        //Soma os elementos do vetor:
        for (let i=0; i<itens.length; i++) {
            soma += itens[i]
        }
        //Calcula a média:
        let media = (soma/itens.length)
        //Escreve:
        //mostravetor()
        res.innerHTML = `<p>Ao todo, temos <strong>${itens.length}</strong> valores cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${max}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${min}</strong>.</p>`
        res.innerHTML += `<p>A soma dos valores informados é <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores informados é <strong>${media}</strong>.</p>`
    }
}