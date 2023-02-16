import React, {useContext} from "react";
import {Link} from "react-router-dom"
import {AiOutlineStar} from "react-icons/ai"
import {LanguageContext} from "../../context";

function MovieCard ({el}){

    return(
        <div className="popular--block">
            <Link to={`/movie/inform/${el.id}`}>
                <img  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
            </Link>
            <h3>{el.title}</h3>
            <h6 style={{marginLeft:"15px"}}>{el.release_date}</h6>
            <p style={{marginLeft:"15px"}}>{el.vote_average}</p>

            <div style={{
                color: "yellow",
                marginLeft: "12px"
            }}>
                <AiOutlineStar />
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
            </div>
        </div>
    )
}
export default MovieCard