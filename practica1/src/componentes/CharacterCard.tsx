import type { Persona } from "../types/character";
import './style.css'

export const CharacterCard =(params: {id?: number, character?: Persona}) =>{
    
    const personita = params.character;

    return(
        <>
            {personita ? <div className="mainContainer">
                <div className="characterDataContainer">
                    <h2>{personita?.name}</h2>
                    <p>Genero: {personita?.gender}</p>
                    <p>Año de nacimiento: {personita?.birth_year}</p>   
                </div>
            </div> : <h1>Loading...</h1>}
        </>
    )
}