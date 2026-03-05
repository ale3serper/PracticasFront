'use client'


import { getCountryByName } from "@/app/lib/api/countryByName";
import { Country } from "@/app/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./page.css"
import CountryPanel from "@/app/components/countryPanel";


const CountryByName = () => {

    const { name } = useParams();

    const [country, setCountry] = useState<Country | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        if (!name) return;

        setLoading(true);

        getCountryByName(String(name))
            .then((res) => setCountry(res.data[0]))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));

    }, [name]);



    if (loading) return <p>Cargando país...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!country) return <p>Cargando país...</p>;



    return (
        <div className="paginaCountry">

            <Link href="/" className="volver">Volver</Link>

            <CountryPanel pais={country} />

        </div>
    );

};

export default CountryByName;