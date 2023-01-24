function contar(){

var inicio = window.document.getElementById('inicio')
var fim = window.document.getElementById('fim')
var passo = window.document.getElementById('passo')
var res = window.document.getElementById('res')
if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = 'Impossível contar!'
    //window.alert('[ERRO] Verifique os dados e tente novamente!]')
    
}else{
    res.innerHTML = 'Contando: <br>'
    var ini = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(p <= 0 ){
        window.alert('Passo Inválido! Considerando PASSO 1')
        p = 1
    }
    if(ini > f){
        if(p >(ini - f)){
           return window.alert('PASSO é maior que a diferença entre o INICIO e o FIM')
            
        }
    }
    if(ini< f){
        if(p>(f - ini)){
           return window.alert('PASSO é maior que a diferença entre o INICIO e o FIM')
        }
    }
    
    if(ini < f ){
        //Contagem crescente
        while(ini<=f){
            res.innerHTML += `${ini}👉`
            ini = ini + p
            }
        
        
    }else{
        //Contagem regressiva
        for(ini; ini >= f; ini-=p ){
            res.innerHTML += `${ini}👉`
        }
        
    }
    res.innerHTML += `🚩`
}
}   