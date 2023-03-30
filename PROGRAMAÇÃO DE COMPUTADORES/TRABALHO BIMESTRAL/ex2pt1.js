// 2) Faça um algorítimo para "Calcular a média de venda de itens em uma loja nos
// meses de Janeiro, Fevereiro e Março", sendo que:
// MEDIADEVENDA= ( ITENSJANEIRO + ITENSFEVEREIRO +
// ITENSMARÇO ) / 3 

var itensJaneiro = prompt("Digite a quantidade de itens vendidos em Janeiro")
var itensFevereiro = prompt("Digite a quantidade de itens vendidos em Fevereiro")
var itensMarco = prompt("Digite a quantidade de itens vendidos em Março")
var mediaVenda = (itensJaneiro + itensFevereiro + itensMarco) / 3

alert("A média de venda de itens é: " + mediaVenda)
