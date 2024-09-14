
function senhanormal() {
    const dataHora = new Date().toLocaleString();
    const numSenha = localStorage.getItem('numSenha') || 0;
    const novaSenha = {
      dataHora,
      numero: numeroSenha,
      senha: `Senha ${numeroSenha} - ${dataHora}`
    };
  
    // Obter as senhas existentes ou criar um novo array
    let senhas = JSON.parse(localStorage.getItem('senhas')) || [];
  
    // Adicionar a nova senha ao array
    senhas.push(novaSenha);
  
    // Atualizar o número da senha para a próxima
    localStorage.setItem('numSenha', parseInt(numeroSenha) + 1);
  
    // Armazenar as senhas atualizadas no localStorage
    localStorage.setItem('senhas', JSON.stringify(senhas));
  
    // Exibir um alerta com a nova senha
    alert('Nova senha gerada: ' + novaSenha.senha);
  }