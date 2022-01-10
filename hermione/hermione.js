function fase2(){
    alert("Harry.. por aqui! Parece o caminho mais seguro até a armada de Dumbledore.")
    alert("Olha! As entradas e saídas de Hogwarts estão distorcidas. ")
    alert("Vamos.. por aqui, nessa porta.")
    return location = ("fase2Hermione.html")
}


function viscoDoDiabo(){
    alert("Hermione: LEMBREI!!!!...")
    alert("Hermione: Rony.. você precisa relaxar! O visco do diabo engole aqueles que se desesperam.")
    alert("Rony: Engole? AAAAAAAAAAA!")
    var decisao = prompt("Parece que Rony não vai conseguir relaxar. Hermione precisa utilizar o feitiço correto para ajudar seus amigos a não serem devorados. Digite 1 - Utilizar Lumus ou 2 - Utilizar - Vulnera Sanentur.")

    while (decisao != 1 && decisao != 2){   
        alert("Digite uma opção válida")
        viscoDoDiabo()
    } 
    
    if (decisao ==1){
        alert("Hermione: LUMUS!!!!!")
        alert("Rony: Ufa.. parece que deu certo. Ainda bem que consegui relaxa.")
        alert("Harry: Ainda bem que você o que? Ainda bem que temos Hermione!")
        return location = ("fase3Hermione.html")

    } 
    
    else if (decisao == 2){
        alert("AH NÃO.. O Visco do Diabo é sensível a luz. Você usou o feitiço errado")
        return location =("gameOverViscodoDiabo.html")
    }
    
}