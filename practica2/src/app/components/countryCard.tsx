import { Country } from "../types";
import "./countryCard.css"




interface Props{
    pais: Country
};

const CountryCard=({pais}:Props)=>{
    return(

        
        <div className="countryContainer">
            
            <h1 className="name">{pais.name.common}</h1>
            <img src={pais.flags.png}/>
            <p className="poblacion">Población: {pais.population} personas</p>
        </div>
    );
}

export default CountryCard