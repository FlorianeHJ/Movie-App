import axios from "axios";
import React, { useEffect } from 'react';


const Form = () => {

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=09ba41025f3fca8724a8283ba52f321f&query=code&language=fr-FR`).then((res) => console.log(res))
    }, [])

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" placeholder="Entrez le titre d'un film" id='search-input' />
                    <input type="submit" value="Rechercher"/>
                </form>
                <div className="btn-sort-container">
                    <div className="btn-sort" id='goodToBad'>
                        Top <span>👉</span>
                    </div>
                    <div className="btn-sort" id='badToGood'>
                        Flop <span>👉</span>
                    </div>
                </div>
            </div>
            <div className="result">RESULTAT</div>
        </div>
    );
};

export default Form;