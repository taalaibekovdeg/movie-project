import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../apiKey/APIKEY";
import {Link} from "react-router-dom"
import ActorMovies from "./ActorMovies";
import {LanguageContext} from "../../context";

function ActorsInform({movieId}) {
    const [actors, setActors] = useState({})
    const [viewMore,setViewMore] = useState(500)
    const {language} = useContext(LanguageContext)

    const {personId} = useParams()
    const getActors = async (id, apiKey) => {
        const url = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=${language}`)
        const {data} = await url
        setActors(data)
        // console.log(data)
    }
    useEffect(() => {
        getActors(personId,APIKEY)
    }, [language])
    const toggleViewMOre = (text) => {
        setViewMore(viewMore === 500 ? text.length : 500)
    }
    return(
        <>
            <div id="ActorsInform">
                <div className="container">
                    <div className="ActorsInform">
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${actors.profile_path}`} alt=""/>
                        <div className="ActorsInform--text">
                            <h2>{actors.name}</h2>
                            <h4>{actors.birthday}</h4>
                            <h4>{actors.biography ? actors.biography.slice(0, viewMore) : actors.biography}</h4>
                            {
                                actors.biography ? <span onClick={() => toggleViewMOre(actors.biography)} style={{
                                    color: "blue",
                                    cursor: "grab"
                                }}>{viewMore === 500 ? "Читать дальше..." : "Свернуть!"}</span> : ""
                            }
                        </div>

                    </div>
                </div>

            </div>
            <ActorMovies personId={personId}/>
        </>

    )
}

export default ActorsInform