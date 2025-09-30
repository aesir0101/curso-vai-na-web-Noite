// script.js

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe a mensagem de sucesso
    document.getElementById("message").style.display = "block";

    // Limpa o formulário após um segundo
    setTimeout(() => {
        document.getElementById("message").style.display = "none";
        this.reset(); // Reseta o formulário
    }, 2000);
});