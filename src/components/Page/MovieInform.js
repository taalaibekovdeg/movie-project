import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../apiKey/APIKEY";
import {AiTwotoneStar} from "react-icons/ai"
import {BsFillBookmarkStarFill} from "react-icons/bs"
import {AiFillHeart} from "react-icons/ai"
import Actors from "../Actors/Actors";
import Trailer from "./Trailer";
import ActorsInform from "./ActorsInform";

function MovieInform() {
    const  [MovieInform, setMovieInform] = useState({})
    const {movieId} = useParams()
    console.log(movieId)
    const getMovieInform = async (id, apiKey) => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        const {data} = await url
        setMovieInform(data)
    }
    useEffect(() => {
        getMovieInform(movieId,APIKEY)
    }, [])
    // console.log(MovieInform)

    return(
        <>
            <div id="MovieInform" style={{
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${MovieInform.backdrop_path}")no-repeat center/cover`,
                filter: "grayscale(0%)",
            }}>
                <div className="container">
                    <div className="MovieInform">
                        <img style={{width: "300px",height: "540px"}} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${MovieInform.poster_path}`} alt=""/>
                        <div className="MovieInform--text">
                            <h2>{MovieInform.title}</h2>
                            <div style={{
                                display: "flex",
                                alignItems: "center"
                            } }>
                                <h4>{MovieInform.release_date}</h4>
                                <p style={{margin: "0 10px"}}>{Math.floor(MovieInform.runtime / 60)}hour {MovieInform.runtime % 60}minute</p>

                            </div>
                            <div className="MovieInform--text__title">
                                <div className="MovieInform--text__title--block" style={{
                                    background: `conic-gradient(yellow,${Math.round(MovieInform.vote_average * 10) * 3.59}deg,gray 0deg)`
                                }}>
                                    <h3 style={{color: "white"}}>{Math.round(MovieInform.vote_average * 10)}%</h3>
                                </div>
                                <h4>
                                    Рейтинг
                                </h4>
                                <button style={{
                                    boxShadow: "0 0 20px green"
                                }}><AiTwotoneStar className="icon"/></button>
                                <button><BsFillBookmarkStarFill className="icon"/></button>
                                <button><AiFillHeart className="icon"/></button>
                            </div>

                            <h3 style={{textShadow: "0 0 50px green"}}>{MovieInform.overview}</h3>
                           <div style={{width: '850px',marginLeft: "-40px"}}> <Actors movieId={movieId} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <Trailer movieId={movieId}/>
        </>
    )
}
export default MovieInform