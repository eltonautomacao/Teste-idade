function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
        gênero ='Homen'
        if (idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'foto-menino.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'foto-adol_menino.png')
        } else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'foto-homen_adulto.png')
        } else {
            //Idoso
            img.setAttribute('src', 'foto-idoso.png')
        }
               } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'foto-menina.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'foto-adol_menina.png')
        } else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'foto-mulher_adulto.png')
        } else {
            //Idoso
            img.setAttribute('src', 'foto-idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
   }
}