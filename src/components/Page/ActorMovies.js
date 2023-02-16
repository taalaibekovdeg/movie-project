import React, {useEffect, useState,Component } from "react";
import axios from "axios";
import {APIKEY} from "../apiKey/APIKEY";
import Slider from "react-slick";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom"

function ActorMovies({personId}) {
    const [actorMovies, setActorMovies] = useState([])
    // const {movieId} = useParams()
    const getActorMovies = async (id, apiKey) => {
        const url = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=en-US`)
        const {data} = await url
        setActorMovies(data.cast)

    }
    useEffect(() => {
        getActorMovies(personId,APIKEY)
    }, [])
    console.log(actorMovies)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };
    return(
        <div id="ActorMovies">
           <div className="container">
               <div className="ActorMovies">

                   <Slider {...settings}>
                       {
                           actorMovies.filter(el => el.poster_path).map((el) => (
                               <div>
                                   <Link to={`/movie/inform/${el.id}`}>
                                       <img style={{width: "230px"}} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>

                                   </Link>
                                   <h4>{el.title}</h4>
                               </div>
                           ))
                       }
                   </Slider>

               </div>
           </div>
        </div>
    )
}
export default ActorMovies