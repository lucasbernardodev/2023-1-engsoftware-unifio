// eu sei que você vai pegar a senha sem abrir o console, mas a intenção vale

console.log("A senha é: 994877")

const button = document.querySelector(".button-interation");

button.addEventListener("click", function() {
    alert("Senha está escondida na aba que começa com C e termina com E")
    const senha = prompt("Digite a senha:");

    if (senha == 994877) {
        alert("Professor me da um emprego");
    } else {
        alert("Erro, verifique o console...");
    }
});
