document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const sobreNome = document.getElementById('sobreNome').value;
    const telf1 = document.getElementById('telf1').value;
    const telf2 = document.getElementById('telf2').value;
    const cpf = document.getElementById('cpf').value;

    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const telPattern = /^\(\d{2}\) \d{5}-\d{4}$/;

    if (!nome || !sobreNome || !telf1 || !telf2 || !cpf) {
        alert('Por favor, preencha todos os campos.');
        return false;
    } 
    else if (!cpfPattern.test(cpf)) {
        alert('Por favor, insira um CPF válido.');
        return false;
    } 
    else if (!telPattern.test(telf1) || !telPattern.test(telf2)) {
        alert('Por favor, insira um número de telefone válido.');
        return false;
    }

    // adicione aqui mais verificações conforme necessário

    alert('Formulário enviado com sucesso!');
    return true;
});
