// 3) Faça um algorítmo que gere o preço de um carro ao consumidor e os valores
// pagos pelo imposto e pelo lucro do distribuidor, sabendo o custo de fábrica do
// carro e que são pagos: a) de imposto: 45% sobre o custo do carro; b) de lucro do
// distribuidor: 12% sobre o custo do carro. 

var custoFabrica = prompt("Digite o custo de fábrica do carro")
var imposto = custoFabrica * 0.45
var lucroDistribuidor = custoFabrica * 0.12
var precoConsumidor = custoFabrica + imposto + lucroDistribuidor

alert("O preço de um carro ao consumidor é: " + precoConsumidor)
alert("O valor pago pelo imposto é: " + imposto)
alert("O valor pago pelo lucro do distribuidor é: " + lucroDistribuidor)
