function gerarAssinatura() {
    var nome = document.getElementById('nome').value || '';
    var cargo = document.getElementById('cargo').value || '';
    var telefone = document.getElementById('telefone').value || '';
    var telefoneCelular = document.getElementById('telefone-celular').value || '';
    var email = document.getElementById('email').value || '';

    // Imagem base
    var imagemBase = new Image();
    imagemBase.src = 'img/font2.png';  // Substitua pelo caminho real da sua imagem

    imagemBase.onload = function () {
      // Criar um canvas para sobrepor as informações
      var canvas = document.createElement('canvas');
      canvas.width = imagemBase.width;
      canvas.height = imagemBase.height;
      var ctx = canvas.getContext('2d');

      // Desenhar a imagem base no canvas
      ctx.drawImage(imagemBase, 0, 0);

      // Definir estilos padrão
      ctx.fillStyle = '#FFFFFF'; // Cor do texto
      ctx.textBaseline = 'middle';

      // Ajustar o tamanho do nome
      var nomeFontSize = calcularTamanhoFonte(nome, 60, 500); // Parâmetros: texto, tamanho máximo da fonte, largura máxima
      ctx.font = 'bold ' + nomeFontSize + 'px Arial';
      ctx.fillText(nome, 65, 120);

      // Ajustar o tamanho do cargo
      var cargoFontSize = calcularTamanhoFonte(cargo, 45, 500);
      ctx.font = cargoFontSize + 'px Arial';
      ctx.fillText(cargo, 65, 190);

      // Ajustar o tamanho do e-mail
      var emailFontSize = calcularTamanhoFonte(email, 35, 600);
      ctx.font = emailFontSize + 'px Arial';
      ctx.fillText(email + ' | ' + telefone + ' | ' + telefoneCelular + ' | ' + ' www.brafer.com.br' , 65, 254);

      // Adicionar o canvas à página
      var imageContainer = document.getElementById('image-container');
      imageContainer.innerHTML = '';
      imageContainer.appendChild(canvas);

      // Criar um link para download da imagem
      var link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'assinatura.png';
      link.innerHTML = 'Baixar Assinatura';
      imageContainer.appendChild(link);
    };
  }

  function calcularTamanhoFonte(texto, tamanhoMaximo, larguraMaxima) {
    var tamanho = tamanhoMaximo;
    var testeCanvas = document.createElement('canvas');
    var testeContext = testeCanvas.getContext('2d');

    do {
      tamanho--;
      testeContext.font = tamanho + 'px Arial';
    } while (testeContext.measureText(texto).width > larguraMaxima);

    return tamanho;
  }