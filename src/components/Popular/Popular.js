import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {APIKEY} from "../apiKey/APIKEY";
import MovieCard from "../Movie-Card/MovieCard";
import {LanguageContext} from "../../context";

function Popular() {
    const [Popular, setPopular] = useState([])
    const [page,setPage] = useState(1)
    const {language} = useContext(LanguageContext)
    const getTopRated = async () => {
        const url = axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${page}`)
        const {data} = await url
        window.scroll(0,0)
        setPopular(data.results)

    }
    useEffect(() => {
        getTopRated()
    }, [language,page])


    return(
        <div id="popular">
            <div className="container">
                  <div className="popular">
                      {
                          Popular.map(el => (
                              <div>
                                  <MovieCard el={el}/>
                              </div>


                          ))
                      }
                  </div>
                <div className="pagination">
                    <button onClick={() => setPage(page -1)}style={{visibility: page === 1 ? "hidden":"visible"}}>prev</button>
                    <button onClick={() => setPage(1)}>1</button>
                    <button onClick={() => setPage(2)}>2</button>
                    <button onClick={() => setPage(3)}>3</button>
                    <h3 style={{visibility: page === 1 || page === 2 || page === 3 ? "hidden":"visible"}}>:</h3>

                    <button style={{visibility: page !== 1 || page !== 2 || page !== 3   ? "visible" :  "hidden",
                    display: page !== 1 || page !== 2 || page !== 3 || page === 4? page: "none"
                    }}>{page +1}</button>
                    {/*<button></button>*/}
                    <button onClick={() => setPage(page +1)}>next</button>
                </div>
            </div>
        </div>
    )
}
export default Popular