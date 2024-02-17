// validacao.js
var numerosCelularValidos = [
    "123456789", 
    "987654321",
    
];

function validarNumeroCelular() {
  var celular = document.getElementById('telefone-celular').value;

  if (numerosCelularValidos.includes(celular)) {
    gerarAssinatura();
  } else {
    alert("Número de celular inválido. Por favor, insira um número válido.");
  }
}
