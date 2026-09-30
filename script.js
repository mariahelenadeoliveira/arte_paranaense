const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventLitener("click", curtir);
    function curtir(){
        const contador = botaoCurtir.queryelector("span");
        if(curtiu === false){
            contador.textContent++;
            curtiu = true;
        } else{
            contador.textContent--;
            curtiu = false;
        }
    }
})