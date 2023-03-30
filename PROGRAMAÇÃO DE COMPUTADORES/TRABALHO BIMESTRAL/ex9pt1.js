// 9 - Desenvolva um algoritmo que calcule o consumo de combustível de um
// automóvel em uma determinada viagem. Com base nos dados de entrada distancia
// da viagem, quilômetros que o carro faz por litro de gasolina, e preço do litro de
// combustível(gasolina), o algoritmo deve calcular e exibir:
// - Quantos litros de combustível serão gastos na viagem - Quanto dinheiro será
// gasto com combustível 

var distancia = prompt("Digite a distância da viagem")
var kmPorLitro = prompt("Digite a quantidade de quilômetros que o carro faz por litro de gasolina")
var precoLitro = prompt("Digite o preço do litro de combustível")

var litros = distancia / kmPorLitro
var valor = litros * precoLitro

alert("Serão gastos " + litros + " litros de combustível")
alert("Será gasto R$ " + valor + " com combustível")
