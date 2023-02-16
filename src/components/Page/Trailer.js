import React, {useEffect, useState, Component } from "react";
import axios from "axios";
import {APIKEY} from "../apiKey/APIKEY";
import Slider from "react-slick";

function Trailer({movieId}) {
    const [trailer, setTrailer] = useState([])

    const getTrailer = async (id, apiKey) => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
        const {data} = await url
        setTrailer(data.results)
    }
    useEffect(() => {
        getTrailer(movieId, APIKEY)
    }, [])
    console.log(trailer)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    return (
        <div id="Trailer" style={{padding: "60px 0"}}>
            <div className="container">
                <div className="Trailer">
                    <Slider {...settings}>
                        {

                            trailer.map((el) => (
                                <div>
                                    <iframe width="350" height="220" src={`https://www.youtube.com/embed/${el.key}`}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen>
                                    </iframe>
                                    <h2 style={{fontSize: "17px",color:"#51c1ff"}}>{el.name}</h2>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Trailer