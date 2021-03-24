const dadosPokemons = {
    Pikachu: {
        tipo: 'Elétrico',
        altura: 1.69,
        peso: 0.630,
        urlImagem: 'https://cdn.discordapp.com/attachments/824092983099261029/824117825748336680/340.png',
    },
    Squirtle: {
        tipo: 'Água',
        altura: 0.5,
        peso: 0.9,
        urlImagem: 'https://media.discordapp.net/attachments/824090483784548373/824116746172104714/007.png',
    },
    Charmander: {
        tipo: 'Fogo',
        altura: 7.0,
        peso: 0.6,
        urlImagem: 'https://cdn.discordapp.com/attachments/824090483784548373/824116808432091156/004.png',
    },
    Ratata: {
        tipo: 'Anomalia',
        altura: 0.3,
        peso: 3.8,
        urlImagem: 'https://media.discordapp.net/attachments/824090483784548373/824116963294969896/2Q.png',
    },
    Bulbasaur: {
        tipo: 'Planta',
        altura: 0.7,
        peso: 7.0,
        urlImagem: 'https://cdn.discordapp.com/attachments/824090483784548373/824117031729233920/001.png',
    },
  };
  
  const btnResultado = document.querySelector('#resultado');
  btnResultado.addEventListener('click', tenteExibirInformacoesPokemon);
  
  function tenteExibirInformacoesPokemon(event) {
    const pokemonsSuportados = Array.from(document.querySelectorAll('#pokemonsSuportados li'))
                                    .map(li => li.innerText);
    const nomePokemon = document.querySelector('#entreComPokemon').value;
    const pokemonEhSuportado = pokemonsSuportados.includes(nomePokemon);
    // outra possibilidade: const pokemonEhSuportado = dadosPokemons.hasOwnProperty('banana');
    
    if (pokemonEhSuportado) {
      exibirDados(nomePokemon);
    } else {
      alert(`Pokemon ${nomePokemon} não encontrado!`);
    }
  }
  
  function exibirDados(nomePokemon) {
    const dadosPokemon = dadosPokemons[nomePokemon];
      const secondD = document.querySelector('.secondD');
      const img = secondD.querySelector('img');
      const tipo = secondD.querySelector('dd:first-of-type');
      const altura = secondD.querySelector('dd:nth-of-type(2)');
      const peso = secondD.querySelector('dd:nth-of-type(3)');
      img.src = dadosPokemon.urlImagem;
      img.style.display = null;
      tipo.innerText = dadosPokemon.tipo;
      altura.innerText = dadosPokemon.altura;
      peso.innerText = dadosPokemon.peso;
  }