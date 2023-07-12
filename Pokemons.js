async function addPokemons(pokemon) {
    const results = document.getElementById('results');
  
    const name = document.createElement('h1');
    const url = document.createElement('p');
    const image = document.createElement('img');
    
    name.textContent = pokemon.name;
    url.textContent = pokemon.url;
    image.src = pokemon.image;
  
    results.appendChild(name);
    results.appendChild(url);
    results.appendChild(image);
  }
  
  async function fetchPokemons() {
    try {
       const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
       const pokemonList = await response.json();
       const pokemons = pokemonList.results;
  
       for (const pokemon of pokemons) {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();
  
          const pokemonObj = {
             name: pokemonData.name,
             url: pokemon.url,
             image: pokemonData.sprites.front_default
          };
  
          addPokemons(pokemonObj);
       }
    } catch (error) {
       console.log('Error', error);
    }
  }
  
  fetchPokemons();
  