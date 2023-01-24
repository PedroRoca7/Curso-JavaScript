function gerarTabuada(){
    
    var numero = window.document.querySelector('#numero')
    var num = Number(numero.value) 
    var tab = window.document.getElementById('seltab')
    
    tab.innerHTML = ''
    if(numero.value.length == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        for(var cont = 0; cont <=10; cont++){
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num*cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
        
        }
    }
}