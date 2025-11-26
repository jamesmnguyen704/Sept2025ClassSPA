import axios from "axios";

// simple stats
async function getPokemon(nameOrId) {
    const url=`https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
    const response = await axios.get(url); // "await" hold before request is completed 
    console.log("Name:", response.data.name);
    console.log("Height:", response.data.height);
    console.log("Weight:", response.data.weight);
// extract types
const types = response.data.types.map(t => t.type.name);
console.log("Types:", types);

}

getPokemon("mew");