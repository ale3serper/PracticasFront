
import { Country } from "../types";
import "./countryPanel.css"




interface Props{
    pais: Country
};


const CountryPanel=({pais}:Props)=>{
    return(
        

    
        <div className="countryPanel">
         <h1>{pais.name.official}</h1>
         <img className="foto"src ={pais.flags.png}/>
         <p>Capital: {pais.capital?.join(", ")}</p>
         <p>Subregión: {pais.subregion}</p>
         <p>Lenguajes: {Object.values(pais.languages).join(", ")}</p>
         <p>Monedas: {Object.values(pais.currencies).map(c => c.name).join(", ")}</p>
        </div>
   
        
    );
}

export default CountryPanel;