import React from 'react';

const Card = ({ movie }) => {
    
    const DataFormater = (date) => {
        let [yy, mm, dd] = date.split("-");
        console.log([yy, mm, dd]);
        
    }
    
    return (
        <div className='card'>
            <img src={movie.poster_path ? "https://image.tmdb.org/t/p/original" + movie.poster_path : "./img/poster.jpg" } alt={`Affiche de ${movie.title}`} />
            <h2>{movie.title}</h2>
            {movie.release_date ? 
                <h5>Sorti le : {movie.release_date}</h5> : null
            }
        </div>
    );
};

export default Card;