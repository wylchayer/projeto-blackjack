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

alert(`Boas vindas ao jogo de BlackJack!`)

const iniciarRodada = confirm(`Quer iniciar uma nova rodada?`)
const cartasUsuario = []
const cartasComputador = []

let pontuacaoUsuario, pontuacaoComputador


if (iniciarRodada === true) {

   cartasUsuario[0] = comprarCarta()
   cartasUsuario[1] = comprarCarta()
   pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor

   cartasComputador[0] = comprarCarta()
   cartasComputador[1] = comprarCarta()
   pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor

   const mensagemCartas =`Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} - pontuação ${pontuacaoUsuario}
Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} - pontuação ${pontuacaoComputador}.`
   
   // console.log(`Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} - pontuação ${pontuacaoUsuario}`)
   // console.log(`Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} - pontuação ${pontuacaoComputador}`)

   pontuacaoUsuario === pontuacaoComputador && pontuacaoUsuario === 22 ? alert(mensagemCartas + '\nDerrota empatada. Ambos estouraram') : 
   pontuacaoUsuario > 21 ? alert(mensagemCartas + '\nUsuário estourou. O computador ganhou!') :
   pontuacaoComputador > 21 ? alert(mensagemCartas + '\nComputador estourou. O usuário ganhou!') :
   pontuacaoUsuario === pontuacaoComputador ? alert(mensagemCartas + '\nEmpate!') :
   pontuacaoUsuario > pontuacaoComputador ? alert(mensagemCartas + '\nO usuário ganhou!') : alert(mensagemCartas + '\nO computador ganhou!')

} else {
   alert(`O jogo acabou!`)
}
