function adicionarCarrinho() {
	alert('Produto adicionado ao carrinho')
}

    function alterarCor(cor) {
      var imagemElement = document.getElementById("imagem");

      switch (cor) {
        case 'branco':
          imagemElement.src = 'imagens/iphonebranco.jpeg';
          break;
        case 'azul':
          imagemElement.src = 'imagens/iphoneazul.jpeg';
          break;
        case 'preto':
          imagemElement.src = 'imagens/iphonepreto.jpeg';
          break;
              default:
          // Pode adicionar um tratamento padrão ou deixar em branco
          break;
      }
    }

     function alterarCorMac(cor) {
      var imagemElement = document.getElementById("macimagem");

      switch (cor) {
        case 'branco':
          imagemElement.src = 'imagens/macbranco.jpeg';
          break;
        case 'cinza':
          imagemElement.src = 'imagens/maccinza.jpeg';
          break;
             default:
          // Pode adicionar um tratamento padrão ou deixar em branco
          break;
      }
    }
