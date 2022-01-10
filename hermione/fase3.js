function paredeMagica(){
    alert (`Hermione: Olha..essas paredes são portais que podem nos levar a qualquer lugar de Hogwarts!`)
    alert("Por aqui...")
    var decisao = prompt("Por onde Hermione deve ir? Digite 1 - entrar no corredor da esquerda; ou Digite 2 - entrar no corredor a direita.")
    while (decisao != 1 && decisao !=2){
        alert('Pressione uma tecla válida!')
        paredeMagica()
    } if (decisao == 1){
        alert("Hermione: Por aqui, vamos pela esquerda.. não tem como dar errado!")
        alert("Todos: AAAAAAAAAAAA!!")
        alert("...")
        alert("AH NÃO!!")
        return location = ("gameOverParede.html")
    } if(decisao ==2){
        alert
    }        alert("Hermione: Por aqui, vamos pela direita.. não tem como dar errado!")
             alert("Todos: AAAAAAAAAAA!!")
             alert("...")
             alert("Dumbledore: Eu sabia que vocês nos encontrariam. Nossa armada está pronta para defender Hogwarts!")
             return location =("hermioneWin.html")
}