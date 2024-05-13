function validarLogin() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    // Usuário e senha padrão para validação
    var usuarioPadrao = "adm";
    var senhaPadrao = "adm";

    if (usuario === usuarioPadrao && senha === senhaPadrao) {
        alert("Login bem-sucedido!");
        // Redireciona para a página do currículo após o login
        window.location.href = "curriculo.html";
    } else {
        alert("Usuário ou senha incorretos. Por favor, tente novamente.");
    }
}
