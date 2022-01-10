var feitico
function iniciarBatalha(){

    alert('Escolha o feitiço que deseja utilizar.')

    feitico = prompt ('Digite 1 - Arania Exumai, 2 - Wingardium Leviosa  ou 3 - Alohomora.')
        if (feitico == 1) {
            alert('Harry: ARANIA EXUMAI!!!!!!!!!!!!')
            alert('Harry: Nossa! Parece ter funcionado! A Aranha saiu correndo.')
            alert('Harry: Vamos, sigam em frente..')
            return location = ('florestaProibida2.html')
        } else if (feitico == 2){
                alert('Harry: Wingaaardium....Leviooosa......')
                alert('Rony: Cara, a aranha está levitando...')
                alert('Hermione: Isso não vai aguentar por muito tempo..');
                alert('Rony: AH NÃO!!! LÁ VEM ELA!');
                return location = ('gameOverAragogue.html')
            } else if (feitico == 3) {
                    alert('Harry: Alohomora!!!')
                    alert('Rony: AH NÃO! Esse feitiço é indicado para abrir portas,cuidado com a Aran...');
                    return location = ('gameOverAragogue.html');
                } else {
                        alert('Parece que a sua varinha está quebrada. Digite uma opção válida.')
                    }
}


