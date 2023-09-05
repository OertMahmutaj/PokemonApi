import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../components/PokemonApi.css"

const PokemonApi = props => {

    const [responseData, setResponseData] = useState(null);
    let e = [];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0');
                setResponseData(result.data.results);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {responseData ?
                <ul>
                    {responseData.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
                </ul>
                : 'Loading...'}
        </div>
    )
}

export default PokemonApi;


