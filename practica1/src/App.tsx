import { useState, useEffect } from "react";
import './App.css';
import type { Persona } from "./types/character";
import { ErrorComponent } from "./componentes/Error";
import { Loader } from "./componentes/Loader";
import { CharacterList } from "./componentes/CharacterList";

 const App = () => {

    const [personajes, setPersonajes] = useState<Persona[]>([]);
    const [cargando, setCargando] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [siguientePagina, setSiguientePagina] = useState<string | null>("https://swapi.dev/api/people/");

    const fetchPersonajes = async (url: string) => {
        try {
            setCargando(true);
            setErrorMsg(null);

            const respuesta = await fetch(url);

            if(!respuesta.ok){
                throw new Error("Error al obtener los datos de la API");
            }

            const datos = await respuesta.json();

            
            setPersonajes((prev) => [...prev, ...datos.results]);
            setSiguientePagina(datos.next);

        } catch (error: any) {
            setErrorMsg(error.message);
        } finally {
            setCargando(false);
        }
    };

   
    useEffect(() => {
        if(siguientePagina){
            fetchPersonajes(siguientePagina);
        }
    }, []);

    return(
        <div>
            <h1>Personajes de Star Wars</h1>

            {cargando && <Loader />}
            {errorMsg && <ErrorComponent message={errorMsg} />}

            <CharacterList characters={personajes} />

            {siguientePagina && !cargando && (
                <button 
                    onClick={() => fetchPersonajes(siguientePagina)}
                    style={{ display: "block", margin: "2rem auto", padding: "0.8rem 1.5rem", cursor: "pointer" }}
                >
                    Siguiente Página
                </button>
            )}
        </div>
    )
}
export default App