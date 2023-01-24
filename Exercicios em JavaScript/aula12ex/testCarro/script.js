function carregar(){
    var cavalos = window.document.getElementById('txtcavalos')
    var res = window.document.getElementById('res')
    if(cavalos.value.length == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var cv = Number(cavalos.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    }   if( cv < 90){
            img.setAttribute('src','carro-podre.png')
            res.innerHTML = `Parabéns Você tem uma lata Velha!`

        }
        else if(cv >=90 && cv < 150){
            img.setAttribute('src','carro-penelope.png')
            res.innerHTML = `Nossaa Olha ela desfilando com seu Carrão!`
        }
        else if(cv >=150 && cv < 210){
            img.setAttribute('src','civic-si.png')
            res.innerHTML = `Ai sim uma bela Máquina!`
        }
        else if(cv >=210 && cv < 400){
            img.setAttribute('src','carro-luxo.png')
            res.innerHTML = `É dificil namorar com um carro desses!`
        }else{
            img.setAttribute('src','pagani-zonda.png')
            res.innerHTML = `Você Zerou a vida!`
        }
        res.appendChild(img)
    }