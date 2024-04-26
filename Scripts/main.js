const loginForm = document.getElementById('loginForm');
const cadastroForm = document.getElementById('cadastroForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validação básica de email e senha
    if (email === '' || password === '') {
        alert('Preencha todos os campos!');
        return;
    }

    // Simulação de login (substitua por sua lógica de autenticação real)
    if (email === 'usuario@exemplo.com' && password === 'senha123') {
        // Login bem-sucedido
        window.location.href = 'curriculo.html'; // Redireciona para a página de currículo
    } else {
        // Login inválido
        alert('E-mail ou senha incorretos!');
    }
});

cadastroForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    // Validação básica de nome, data de nascimento, email, senha e confirmação de senha
    if (nome === '' || dataNascimento === '' || email === '' || senha === '' || confirmaSenha === '') {
        alert('Preencha todos os campos!');
        return;
    }

    if (senha !== confirmaSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    // Simulação de cadastro (substitua por sua lógica de registro real)
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'index.html'; // Redireciona para a página de login
});
