function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano ){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','Menino.png')
            }
            else if(idade >=10 && idade < 25){
                //Joven
                img.setAttribute('src','JovemHomem.png')
            }else if(idade>= 25 && idade < 60){
                //Adulto
                img.setAttribute('src','AdultoHomem.png')
            }else{
                //Idoso
                img.setAttribute('src','IdosoHomem.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','Menina.png')
            }
            else if(idade >=10 && idade < 25){
                //Joven
                img.setAttribute('src','JovemMulher.png')
            }else if(idade>= 25 && idade < 60){
                //Adulto
                img.setAttribute('src','AdultoMulher.png')
            }else{
                //Idoso
                img.setAttribute('src','IdosaMulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}