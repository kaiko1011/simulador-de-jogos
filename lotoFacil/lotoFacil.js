import { Cxmsg } from "../caixaMensagem.js"
const config={
    cor:"#5f9ea0"
}
Cxmsg.config(config)

document.querySelector("#jogos").focus()
const btnJogar= document.querySelector("#jogar")
btnJogar.addEventListener("click",()=>{
    let controle=Cxmsg.estado
    document.querySelector('.money').setAttribute("style","display:block")
    const quantidadeNumeros=document.querySelector("#jogos").value
    
    if(quantidadeNumeros >=15 && quantidadeNumeros <=20){
        
        mostraJogo(quantidadeNumeros)
        
    }else{
        document.querySelector("#jogos").blur()
        document.querySelector('.money').setAttribute("style","display:none")
        Cxmsg.mostrar("Loto Facil","A Loto Facil só aceita entre 15 e 20 numeros. <br></br> Tente Novamente:")      
        return
    }
})

function mostraJogo(quantidadeNumeros){

    let array = [];
      for (let i = 1; i <= quantidadeNumeros; i++) {
          let numeros = parseInt(Math.ceil(Math.random()*25));
          
          if(array.includes(numeros)){
              i--
          }else{
              array.push(numeros)
          }
      }
      let ordenar = array.sort((a,b)=>{
          return a-b}); 
             
          ordenar = ordenar.join('-');  
          document.querySelector('.money').setAttribute("style","opacity:20%")
          document.querySelector('#mais_jogos').innerHTML='Para mais jogos continue clicando'      
          document.querySelector('.result').innerHTML = `Olá, seus numeros da sorte são: `;
          document.querySelector('.numeros').innerHTML=ordenar  
          document.querySelector('.saudacao').textContent = 'Bons Jogos e Boa Sorte'; 
  }
  

  


