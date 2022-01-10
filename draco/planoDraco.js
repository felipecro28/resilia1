var decisao

function dumbledoreAcao()

{

    alert (`Dumbledore: Draco? O que faz aqui, filho?`)
    alert (`Dumbledore: Você não deveria estar na sala da Sonserina?`)
    alert (`Draco: Eu fui mandado aqui... para acabar com você e destruir Hogwarts!`)
    alert (`Dumbledore: Draco, meu filho, me ajude a destruir esse mal, 
tenho certeza de que existe um lugar especial para você em Hogwarts!`)
    decisao = prompt(`Draco precisa responder Dumbledore.
Ele pode 1 - Desistir do plano e contar tudo, 2 - Sacar a varinha e começar um duelo.`);

    while(decisao != 1 && decisao !=2)
     {
        alert("Digite uma opção válida!")
        dumbledoreAcao()
    }
    if(decisao == 1)
    {
        alert("Draco: Os comensais da morte encontram-se no limite de Hogwarts...")
        alert("Draco: Eles esperam o seu assassinato para quebrar as barreiras e invadir a escola!")
        alert("Draco: Eu fui enviado aqui para te matar, me desculpe, professor... eu não queria...")
        alert("Dumbledore: Muitas vezes nos vemos obrigados a fazer aquilo que não queremos.")
        alert("Dumbledore: No final do dia, nossas escolhas nos dirão para onde iremos.")
        alert("Dumbledore: Enviarei dementadores à floresta e Hogwarts estará salva! Obrigado, Draco.")
        alert("... Você salvou a escola!")
        return location = ("congratulationsDraco.html")

    } 
    
    else if(decisao == 2) 
    {
        alert("Dumbledore: Draco, o que você está fazendo?")
        alert("Draco: É meu destino, eu preciso fazer isso!")
        decisao = prompt (`Draco está prestes a assassinar Dumbledore. Escolha o que fazer:
1 - Desistir e contar tudo, 2 - Usar AVADA KEDAVRA contra Alvo.`)

        while(decisao != 1 && decisao !=2)

        {
            alert("Digite uma opção válida!")
            dumbledoreAcao()
        }

        if(decisao == 1)
        {
            alert("Draco: Os comensais da morte encontram-se no limite de Hogwarts...")
            alert("Draco: Eles esperam o seu assassinato para quebrar as barreiras e invadir a escola!")
            alert("Draco: Eu fui enviado aqui para te matar, me desculpe, professor... eu não queria...")
            alert("Dumbledore: Muitas vezes nos vemos obrigados a fazer aquilo que não queremos.")
            alert("Dumbledore: No final do dia, nossas escolhas nos dirão para onde iremos.")
            alert("Dumbledore: Enviarei dementadores à floresta e Hogwarts estará salva! Obrigado, Draco.")
            alert("... Você salvou a escola!")
            return location = ("congratulationsDraco.html")
        } else if (decisao == 2)
        alert("Draco: AVADA KEDAVRA!!!!")
        alert("Dumbledore: Dra... - co....")
        alert("(barulho de queda)")
        alert("...")
        return location =("gameOverDraco.html")
    }
}