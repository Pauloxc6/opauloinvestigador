document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  // Obter valores de entrada de usuário e senha
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Verificar se o usuário e a senha estão corretos (substitua com sua lógica de verificação)
  if (username === "usuario@gmail.com" && password === "senha") {
    // Redirecionar para a página principal
     window.location.href = "./../adm/index.html";
  } else {
    // Exibir mensagem de erro
    alert("Usuário ou senha incorretos. Por favor, tente novamente.");
  }
});