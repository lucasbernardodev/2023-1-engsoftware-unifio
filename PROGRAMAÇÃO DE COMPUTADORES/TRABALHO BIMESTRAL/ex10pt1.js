// 10) Escreva um algoritmo para calcular a quantidade dinheiro gasta por um
// fumante. Dados: o número de anos que ele fuma, o nº de cigarros fumados por
// dia e o preço de uma carteira.

var anos = prompt("Digite o número de anos que você fuma")
var cigarrosPorDia = prompt("Digite o número de cigarros fumados por dia")
var precoCarteira = prompt("Digite o preço de uma carteira")

var dias = anos * 365
var cigarros = dias * cigarrosPorDia
var carteiras = cigarros / 20
var valor = carteiras * precoCarteira

alert("Você gastou R$ " + valor + " com cigarros")
