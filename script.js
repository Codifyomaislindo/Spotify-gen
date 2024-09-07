unction generateRandomString(length) {
      const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
      }
      return code;
    }

    // Função para gerar e exibir os códigos de Spotify
    function generateSpotifyCodes() {
      const numCodes = document.getElementById('numCodes').value;
      const generatedLinksContainer = document.getElementById('generatedLinks');

      // Limpa a área de resultados anteriores
      generatedLinksContainer.innerHTML = '';

      if (numCodes <= 0 || isNaN(numCodes)) {
        alert('Por favor, insira um número válido.');
        return;
      }

      // Gera os códigos e cria as URLs
      for (let i = 0; i < numCodes; i++) {
        const code = generateRandomString(10);
        const url = `https://www.spotify.com/br-pt/ppt/microsoft/?code=${code}`;

        // Cria um elemento <a> para exibir cada link gerado
        const linkElement = document.createElement('a');
        linkElement.href = url;
        linkElement.textContent = url;
        linkElement.target = '_blank';

        // Adiciona o link à área de resultados
        generatedLinksContainer.appendChild(linkElement);
      }
    }

    // Adiciona evento ao botão de gerar códigos
    document.getElementById('generateBtn').addEventListener('click', generateSpotifyCodes);
