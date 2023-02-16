import logo from './logo.svg';
import './App.scss';
import Header from "./components/header/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Popular from "./components/Popular/Popular";
import TopRated from "./components/TopRated/Top-Rated";
import {BrowserRouter} from "react-router-dom";
import MovieInform from "./components/Page/MovieInform";
import Actors from "./components/Actors/Actors";
import ActorsInform from "./components/Page/ActorsInform";
import Trailer from "./components/Page/Trailer";
import ActorMovies from "./components/Page/ActorMovies";
import {useState} from "react";
import SearchResult from "./SearchResults/SearchResult";
import {ColorContext} from "./context";


function App() {
    const [mode, setMode] = useState(JSON.parse(localStorage.getItem("mode")))
    const [color,setColor] = useState(ColorContext)
  return (
    <div className="App" style={{
        background: mode ? "black": ""
    }}>
        <Header setMode={setMode} mode={mode}/>

        <Routes>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/popular"} element={<Popular/>}/>
            <Route path={"/topRated"} element={<TopRated/>}/>
             <Route path={"/movie/inform/:movieId"} element={<MovieInform/>}/>
            <Route path={"/actors"} element={<Actors/>}/>
            <Route path={"/actorsInform/:personId"} element={<ActorsInform/>}/>
            <Route path={"/trailer"} element={<Trailer/>}/>
            <Route path={"/actorMovies/:movieId"} element={<ActorMovies/>}/>
            <Route path={"/movies/search-result/:movieName"} element={<SearchResult/>}/>
        </Routes>
    </div>
  );
}

export default App;
