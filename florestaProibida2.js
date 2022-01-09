var decisao

function ouvirMelhor(){
    alert('Melius Auditus!')
    alert('Nossa, o silêncio da floresta foi embora..')
    alert('Espere!! Posso ouvir comensais da morte grunhindo, eles parecem tramar algo.')
    alert('AH NÃO!! A Armada de Dumbledore está comprometida!')
    alert('Podemos retornar a escola e ajudar o exército de Dumbledore ou forçar o combate agora mesmo!')

    decisao = prompt('Digite 1 - retornar e ajudar o exército, ou 2 - enfrentar os comensais da morte')

    if (decisao == 1){
        alert('Ok...vamos por aqui, conheço um atalho.')
        return location = ('hogwartsBattle.html')
    } 
    
    if (decisao == 2){
        alert('Ok... um pouco de coragem não nos deve fazer mal')
        alert('Por aqui!')
        alert('É Bellatrix! Ela está com Neville!')
        alert ('EXPELLIARMUS!!!!!')
        alert ('BELATRIX: AVADA KEDAVRA!!!');
        return location = ('gameOver3.html')
    } 
    
    else {
        alert('Digite uma opção válida!')
    }
}
