var harryFala
var decisao
function iniciarBatalha(){

    alert('Harry Potter...');
    alert('O garoto que sobreviveu está pronto para morrer?');
    alert('Mande lembranças aos pais de Neville!');

    harryFala = prompt (`Como deseja responder Bellatrix? 
1 - Provocá-la sobre sua reputação, 2 - Usar feitiço Expelliarmus.`)
        if (harryFala == 1) {

            alert('Harry: Bellatrix, Bellatrix...')
            alert('Harry: Você vai aparatar de novo ou vai me enfrentar como a bruxa que é?')
            alert('Bellatrix: AVADA KEDAVRA!!!!')
            decisao = prompt (`Bellatrix utilizou o AVADA KEDRAVA. 
Digite 1- para desviar para a esquerda, ou 2 para usar expelliarmus`)

            if(decisao ==1){
                alert(`Harry: Nossa... essa foi por pouco`)
                alert(`Hermione: Petrificus Totales`)
                alert(`Hermione: Vamos, entre por ali.. essa bruxa não vai mais nos oferecer perigo `)
                return location = ('finalBattle.html')
            } if(decisao ==2){
                alert(`Bellatrix: AHAHAHA!
Harry Potter... você é um tolo`)
                alert(`Bellatrix: Boa sorte na próxima vez que decidir medir forças comigo!!`)
                return location = ("gameOver4.html")
            }
        } 
        
        else if (harryFala == 2){
            alert(`Harry: EXPELLIARMUS!!!`)
            alert(`Bellatrix: AVADA KEDAVRA!!!`)
            alert(`Pobre garoto....
achou que poderia medir forças comigo`)
            alert(`Até nunca mais, Potter!`)
            return location = ("gameOver4.html")
         
        } else {
                alert('Parece que a sua varinha está quebrada. Digite uma opção válida.')
        }
}