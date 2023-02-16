import React, {useEffect, useState,Component} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {APIKEY} from "../apiKey/APIKEY";
import Slider from "react-slick";
import Person from "../../img/person-icon.webp"


function Actors({movieId}) {
    const [actors, setActors] = useState([])
    const getActors = async (id,apiKey) => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
        const {data} = await url
        setActors(data.cast)
    }
    useEffect(() => {
        getActors(movieId,APIKEY)
    }, [])
    console.log(actors)
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true
    };

    return(
        <div id="Actors">
            <div className="container">
                <div className="Actors">


                    <Slider {...settings}>
                        {
                            actors.map((el) => (
                                <div className="Actors--title">
                                    <Link to={`/actorsInform/${el.id}`}>
                                        {
                                            el.profile_path ?

                                                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`} alt=""/> :
                                                <img style={{width: "120px" , height: "152px"}} src={Person} alt=""/>


                                        }
                                    </Link>

                                    <h2>{el.name}</h2>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

        </div>
    )
}
export default Actors