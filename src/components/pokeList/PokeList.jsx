import { useEffect, useState } from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Card, Container } from "./style";

export function PokeList() {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokmenons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0";
    const res = await fetch(url);
    const data = await res.json();

    const createPokemonObject = (results) => {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    };
    createPokemonObject(data.results);
    console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokmenons();
  }, []);

  return (
    <>
      <Container>
        <Card>
          {allPokemons.map((pokemonStats) => (
            <PokemonCard
              key={pokemonStats.name}
              id={pokemonStats.id.toString().padStart(3, "0")}
              image={
                pokemonStats.sprites.other["official-artwork"].front_default
              }
              name={pokemonStats.name.replace(/^./, (str) => str.toUpperCase())}
              type={pokemonStats.types[0].type.name}
              weight={pokemonStats.weight}
              height={pokemonStats.height}
              stats={pokemonStats.stats
                .map((stat) => stat.base_stat)
                .slice(0, 3)}
              statsName={pokemonStats.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)}
            />
          ))}
        </Card>
      </Container>
    </>
  );
}
