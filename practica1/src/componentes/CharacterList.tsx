import type { Persona } from "../types/character";
import { CharacterCard } from "./CharacterCard";
import './style.css'



export const CharacterList = (params: { characters?: Persona[] }) => {
  
  const lista = params.characters;

  return (
    <>
      {lista && lista.length > 0 ? (
        <div className="lista">
          {lista.map((personita, e) => (
            <CharacterCard
              key={e}
              id={e}
              character={personita}
            />
          ))}
        </div>
      ) : (
        <h2>No hay personajes disponibles</h2>
      )}
    </>
  );
};
