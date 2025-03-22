document.addEventListener('DOMContentLoaded', function() { 

    const formContato = document.getElementById('form-contato');
    const tabelaContatos = document.getElementById('tabela-contatos').getElementsByTagName('tbody')[0]; // Pega o tbody

    formContato.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;

        if (nome.trim() === '' || telefone.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const novaLinha = tabelaContatos.insertRow();

        const celulaNome = novaLinha.insertCell();
        const celulaTelefone = novaLinha.insertCell();

        celulaNome.textContent = nome;
        celulaTelefone.textContent = telefone;

        formContato.reset();
    });
});