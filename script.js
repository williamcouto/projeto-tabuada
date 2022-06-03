function CalcTab(){
    let num = document.getElementById('user-num')
    let tab = document.getElementById('tabselec')
    let res = document.querySelector('resp')
    if(num.value.length == 0){
       window.alert('[ERRO]: Preencha os campos!')
    }
    else {
        let n = Number(num.value) 
        let cont = 1

        tab.innerHTML = ""
        while(cont <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${cont} = ${n*cont}`
            tab.appendChild(item)
            cont++
        }
    } 
}