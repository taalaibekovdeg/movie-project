import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {APIKEY} from "../components/apiKey/APIKEY";
import MovieCard from "../components/Movie-Card/MovieCard";
import Slider from "react-slick";

function SearchResult() {
    const [result, setResult] = useState([])
    const [button, setButton] = useState([1,2,3,4,5,6,7,8,9,10])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const {movieName} = useParams()
    console.log(movieName)
    const getResult = async (name, apiKey) => {
        const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}&language=en-US&page=${page}`)
        console.log(res)
        window.scroll(0, 0)
        setResult(res.data.results)
        setTotalPage(res.data.total_pages)
    }
    useEffect(() => {
        getResult(movieName, APIKEY)
    }, [movieName, page])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };
    return (
        <div id="movies">
            <div className="container">
                <div className="movies" style={{
                    paddingTop: "130px",
                    display: "flex",
                    flexWrap: "wrap"
                }}>
                    {
                        result.map(el => <MovieCard el={el} key={el.id}/>)
                    }
                </div>
                <div className="header--buttons" style={{padding: "50px 0"}}>
                    <button style={{
                        visibility: page === 1 ? "hidden" : "visible"
                    }} onClick={() => setPage(page - 1)}>prev
                    </button>

                    {
                        button.map((el) => (
                            <div>
                                <button style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%"
                                }}>{page}</button>
                                <button></button>
                            </div>
                        ))
                    }

                    <button style={{
                        visibility: page === totalPage ? "hidden" : "visible"
                    }} onClick={() => setPage(page + 1)}>next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchResult