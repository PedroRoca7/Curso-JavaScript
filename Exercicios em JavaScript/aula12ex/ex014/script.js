function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var dia = data.getDay()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    switch(dia){
        case 0:
            d.innerHTML = `Hoje é Domingo.`
            break    
        case 1:
            d.innerHTML = `Hoje é Segunda-Feira.`
            break    
        case 2:
            d.innerHTML = `Hoje é Terça-Feira.` 
            break    
        case 3:
            d.innerHTML = `Hoje é Quarta-Feira.`
            break
        case 4:
            d.innerHTML = `Hoje é Quinta-Feira.`
            break
        case 5:
            d.innerHTML = `Hoje é Sexta-Feira.`
            break
        default:
            d.innerHTML = `Hoje é Sábado.`
            break                
    }
    
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f' 
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background ='#b9846f'
    }else{
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background ='#515154'
    }
}
