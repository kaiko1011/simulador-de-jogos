
import selecaoTimes from '../listaTimes.js'
const btnTime=document.querySelector("#timeCoracao") 
const botaoConfirmaJogos= document.querySelector("#jogar");
botaoConfirmaJogos.focus()
botaoConfirmaJogos.addEventListener('click', function() {  
      let array = [];

      for (let i = 1; i <= 10; i++) {
          let numeros = parseInt(Math.ceil(Math.random()*80));
          if(array.includes(numeros)){
              i--
          }else{
              array.push(numeros)
          }
      }
      let ordenar = array.sort((a,b)=>{
          return a-b});
      ordenar = ordenar.join('-');   
      document.querySelector('.porquinho_cash').setAttribute("style","display:none") 
      document.querySelector('.maisJogos').innerHTML='Clique novamente para novos jogos'    
      document.querySelector('.mostraMensagem').innerHTML = 'Olá, seus numeros da sorte são :'
      document.querySelector('.result').innerHTML=ordenar
      document.querySelector('#saudacao').textContent = 'Bons Jogos e Boa Sorte'; 
      document.querySelector('.mostraTimeCoracao').setAttribute("style","display:block")
    })
    
    btnTime.addEventListener('click', ()=>{    
        let posicao=parseInt(Math.ceil(Math.random()*selecaoTimes.length))-1    
        let timeMostra=selecaoTimes[posicao]
        document.querySelector('.ver_time').setAttribute("style","display:block")
        document.querySelector('.time').innerHTML=timeMostra 
        
  })
  


