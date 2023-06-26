function tabuada() {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab') 

    if (num.value.length==0) {
        alert('Preencha o campo!')
    } else {
        tab.innerHTML = ''
        n = Number(num.value)
        for (let c=1;c<=10;c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `item${c}`
            tab.appendChild(item)
        }
    }
}