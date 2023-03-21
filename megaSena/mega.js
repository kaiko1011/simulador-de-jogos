    import { Cxmsg } from "../caixaMensagem.js";
    const config={
        cor:"#48f"
    }
    Cxmsg.config(config)


    document.querySelector("#jogos").focus();
    const botaoConfirmaJogos= document.querySelector("#jogar");
    botaoConfirmaJogos.addEventListener('click', function(evt) {
    evt.preventDefault()    
    const qtde = document.querySelector("#jogos").value;
        
    document.querySelector("#jogar").focus();
        if(qtde >=6 && qtde <= 10) {
          
            imprime(qtde);
    
        }else {
            Cxmsg.mostrar("Mega Sena","A Mega Sena só aceita entre 6 e 10 numeros.<br></br> Por favor digite o numero novamente:")
            document.querySelector("#jogos").blur();
             document.querySelector("#jogos").value="" 
             return
        }
    })

    function imprime(qtde){
     
      let array = [];
      for (let i = 1; i <= qtde; i++) {
          let numeros = parseInt(Math.ceil(Math.random()*60));
          if(array.includes(numeros)){
              i--
          }else{
              array.push(numeros)
          }
      }
      let ordenar = array.sort((a,b)=>{
          return a-b});
      ordenar = ordenar.join('-');    
      document.querySelector('.maisJogos').innerHTML='Clique novamente para novos jogos'  
      document.querySelector('.img_cash').setAttribute("style","height:100px")  
      document.querySelector('.result').innerHTML = "Olá, seus numeros da sorte são:"
      document.querySelector('#numeros').innerHTML=ordenar 
      document.querySelector('#saudacao').textContent = 'Bons Jogos e Boa Sorte';
      document.querySelector(".img_trevo").setAttribute("style","display:none")    
  }

  


  



