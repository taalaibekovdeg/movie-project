import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "../apiKey/APIKEY";
import MovieCard from "../Movie-Card/MovieCard";
import {LanguageContext} from "../../context";

function TopRated() {
    const [TopRated, setTopRated] = useState([])
    const [button, setButton] = useState(1)
    const {language} = useContext(LanguageContext)
    const getTopRated = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${language}&page=1`)
        const {data} = await url
        setTopRated(data.results)
    }
    useEffect(() => {
        getTopRated()
    }, [language,button])
    console.log(TopRated)

    return (
        <div id="topRated">
            <div className="container">
                <div className="topRated">
                    {
                        TopRated.map(el => (
                            <MovieCard el={el}/>
                            )
                        )
                    }
                </div>
                <div  className="pagination">
                    <button onClick={() => setButton(button -1)}>prev</button>

                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <h3>:</h3>
                    <button>{button +1}</button>
                    <button onClick={() => setButton(button +1)}>next</button>
                </div>
            </div>
        </div>
    )
}

export default TopRated

//