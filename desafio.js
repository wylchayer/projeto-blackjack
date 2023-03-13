/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const elaboracaoMensagemCartasUsuario = (arrayUsuario) => {
   let mensagemPronta = 'Suas cartas são'
   
   for (let i in arrayUsuario) {
      if (i < arrayUsuario.length){
         mensagemPronta += ' ' + arrayUsuario[i].texto
      } else {
         mensagemPronta += '.'
      }
   }

   return mensagemPronta
}

const elaboracaoMensagemCartasComputador = (arrayComputador) => {
   let mensagemPronta = 'As cartas do computador são'
   
   for (let i in arrayComputador) {
      if (i < arrayComputador.length){
         mensagemPronta += ' ' + arrayComputador[i].texto
      } else {
         mensagemPronta += '.'
      }
   }

   return mensagemPronta
}

const calculoPontuacaoUsuario = (arrayUsuario) => {
   let pontuacao = 0

   for (let i of arrayUsuario) {
      pontuacao += i.valor
   }

   return pontuacao
}

const calculoPontuacaoComputador = (arrayComputador) => {
   let pontuacao = 0

   for (let i of arrayComputador) {
      pontuacao += i.valor
   }

   return pontuacao
}


// Início 
alert(`Boas vindas ao jogo de BlackJack!`)

const iniciarRodada = confirm(`Quer iniciar uma nova rodada?`)
const cartasUsuario = []
const cartasComputador = []

let pontuacaoUsuario, pontuacaoComputador

if (iniciarRodada === true) {

   cartasUsuario[0] = comprarCarta()
   cartasUsuario[1] = comprarCarta()

   while (cartasUsuario[0].valor === 11 & cartasUsuario[1].valor === 11) {
      cartasUsuario[0] = comprarCarta()
      cartasUsuario[1] = comprarCarta()
   }
   pontuacaoUsuario = calculoPontuacaoUsuario(cartasUsuario)

   cartasComputador[0] = comprarCarta()
   cartasComputador[1] = comprarCarta()
      
   while (cartasComputador[0].valor === 11 & cartasComputador[1].valor === 11) {
      cartasComputador[0] = comprarCarta()
      cartasComputador[1] = comprarCarta()
   }
   pontuacaoComputador = calculoPontuacaoComputador(cartasComputador)

   let mensagemCartasUsuario = elaboracaoMensagemCartasUsuario(cartasUsuario)
   let comprarMaisCarta = true

   // comprando cartas usuário
   while (comprarMaisCarta === true && pontuacaoUsuario <= 21) {
      comprarMaisCarta = confirm(`${mensagemCartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}.
      Deseja comprar mais uma carta?`)

      if (comprarMaisCarta) {
         cartasUsuario.push(comprarCarta())
         pontuacaoUsuario = calculoPontuacaoUsuario(cartasUsuario)
         mensagemCartasUsuario = elaboracaoMensagemCartasUsuario(cartasUsuario)
      }

   }
   
   let mensagemCartasComputador = elaboracaoMensagemCartasComputador(cartasComputador)

   const mensagemUsuarioEstourou = `${mensagemCartasUsuario}. Sua pontuação é ${pontuacaoUsuario}. (Estourou)
   ${mensagemCartasComputador}. A pontuação do computador é ${pontuacaoComputador}.
   O computador ganhou!`

   // Verificação se usuário estourou.
   if (pontuacaoUsuario > 21) {
      alert(mensagemUsuarioEstourou)
   } else{

      // Comprando cartas computador
      while (pontuacaoComputador < pontuacaoUsuario && pontuacaoComputador <= 21){
         cartasComputador.push(comprarCarta())
         pontuacaoComputador = calculoPontuacaoComputador(cartasComputador)
         mensagemCartasComputador = elaboracaoMensagemCartasComputador(cartasComputador)
      }

      const mensagemComputadorEstourou = `${mensagemCartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.
      ${mensagemCartasComputador}. A pontuação do computador é ${pontuacaoComputador}. (Estourou)
      O Usuário ganhou!`

      const mensagemUsuarioGanhou = `${mensagemCartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.
      ${mensagemCartasComputador}. A pontuação do computador é ${pontuacaoComputador}.
      O Usuário ganhou!`

      const mensagemComputadorGanhou = `${mensagemCartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.
      ${mensagemCartasComputador}. A pontuação do computador é ${pontuacaoComputador}.
      O Computador ganhou!`

      const mensagemEmpate = `${mensagemCartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.
      ${mensagemCartasComputador}. A pontuação do computador é ${pontuacaoComputador}.
      Empate!`

      // Verificação final. 1° se computador estourou - 2º comparação entre as pontuações
      pontuacaoComputador > 21 ? alert(mensagemComputadorEstourou) :
      pontuacaoUsuario === pontuacaoComputador ? alert(mensagemEmpate) :
      pontuacaoUsuario > pontuacaoComputador ? alert(mensagemUsuarioGanhou) : alert(mensagemComputadorGanhou)

   }

} else {
   alert(`O jogo acabou!`)
}