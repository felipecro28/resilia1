var decisao

function batalhaFinal(){

    alert(`Voldemort: HARRY.... POTTER....
O garoto que sobreviveu, veio para morrer.`);
    alert( `Rony: Olha, Harry! O exército está se juntando pelos flancos!`);
    alert(`Rony: Eles precisam de reforços, vou ajudá-los, e você...
vá atrás de Voldemort!`);

    decisao = prompt(`A armada está em apuros, mas Harry deve enfrentar Voldemort sozinho.
Digite 1 - ir atrás de Voldemort, ou 2 - juntar-se a Armada.`);
    
    while (decisao != 1 && decisao !=2){

        alert("Digite uma opção válida!");
        batalhaFinal();

    } if (decisao == 1){

        alert(`Voldemort: Eu sabia que você me seguiria, criança...
Parece que a profecia está prestes a ser cumprida.`);

        alert(`Voldemort: Você deveria estar em meu exérciro, Harry! Nós seriamos grandiosos!`);
        alert(`Voldemort: Mas já que não é assim....AVADA KEDAVRA!!....`);

        decisao = prompt(`O feitiço de Voldemort está prestes a te acertar.
Digite 1 - pegar um escudo no chão e se defender, 2 - pular para a esquerda.`);

        if(decisao == 1){

            alert("Ah não... esse escudo não vai aguentar por muito tempo..")
            return location = ("fimDeJogo.html")

        } if(decisao == 2){

            alert('Harry desvia para a esquerda e encontra a varinha das varinhas..')
            decisao = prompt (`É hora de atacar! Escolha o feitiço desejado para desarmar Voldemort:
1 = Expelliarmus! , 2 = Vulnera Sanentur`)

        } if(decisao == 1){
                alert("Harry: EXPELLIARMUS!!")
                alert("Ele caiu.. rápido, quebrem sua varinha...")
                return location = ("congratulationsHarry.html")

            } if(decisao==2){
                alert("Ah não, esse feitiço serve para curar feridas específicas.")
                alert("Voldemort: AVADA KEDAVRA!!!!!")
                alert("...")
                return location = ("fimDeJogo.html")
            }

        } if (decisao ==2){

            alert ("Harry juntou-se a armada e deixou Voldemort sozinho.")
            alert("A profecia não foi cumprida e Voldemort derrotou todos.")
            return location = ('fimDeJogo.html')
        }
    
}