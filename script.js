
function senhanormal() {
    const dataHora = new Date().toLocaleString();
    const numSenha = localStorage.getItem('numSenha') || 0;
    const novaSenha = {
      dataHora,
      numero: numeroSenha,
      senha: `Senha ${numeroSenha} - ${dataHora}`
    };

    let senhas = JSON.parse(localStorage.getItem('senhas')) || [];

    senhas.push(novaSenha);
  
    localStorage.setItem('numSenha', parseInt(numeroSenha) + 1);

    localStorage.setItem('senhas', JSON.stringify(senhas));
  
    alert('Nova senha gerada: ' + novaSenha.senha);
  }