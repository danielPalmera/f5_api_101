/** ejericio 1 */

async function getPokemon(name) {

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`  
  const response = await fetch(url)   // Pedimos datos a la API  
  const data = await response.json()  // Convertimos la respuesta a JSON  

  console.log("Nombre:", data.name)  
  console.log("Habilidades:")
  data.abilities.forEach(element => {
    console.log("->", element.ability.name, "-", element.ability.url)
  });

}

/** ejercicio 2 */
async function listPokemons() {  
  
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const data = await response.json()

  console.log("Response")
  console.log(response)

  console.log("Lista de Pokémon:")
  data.results.forEach(pokemon => {  
      console.log("- Name", pokemon.name," URL:", pokemon.url)
      const response2 = fetch(pokemon.url)
      response2.then(res => res.json()).then(data2 => {
        console.log(data2)
      })
      
  })
}

async function listPokemonsPaginated(limit, offset) {  
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log("Lista de Pokémon paginados:")
  data.results.forEach(pokemon => {  
    console.log("-", pokemon.name)
  })
}

//listPokemonsPaginated(5, 5)
/*
✔ Tareas 1
- Cambia "ditto" por otros Pokémon.
- Muestra también sus habilidades (*data.abilities*).
*/
//getPokemon('pikachu')

/*
✔ Tareas 2
- Muestra solo los nombres
- Identifica qué propiedades tiene cada elemento dentro de `results`
- Investiga qué información extra se obtiene usando la URL de cada Pokémon (sin implementarlo aún)
- Imprime la informacion por *console.log*.
- Muestra también la URL de cada Pokémon.
*/
//listPokemons()

/**
 ### ✔ Tareas

- Pide 5 Pokémon.
- Pide 10 Pokémon empezando desde el número 20.
- Muestra los nombres de todos los Pokémon que recibas.
 */
//listPokemonsPaginated(5)
listPokemonsPaginated(10,20)