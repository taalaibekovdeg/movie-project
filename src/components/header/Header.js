import React, {useContext, useState} from "react";
import LOGO from "../../img/logo.png"
import {FiSearch} from "react-icons/fi"
import {NavLink,Link,useNavigate} from "react-router-dom";
import {ColorContext, LanguageContext} from "../../context";

function Header({setMode,mode}) {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const changeTheme = () => {
        setMode(!mode)
        localStorage.setItem("mode", JSON.stringify(!mode))
    }
    const {setLanguage, language} = useContext(LanguageContext)
    const [color, setColor] = useState(ColorContext)
    const handleChange = (e) => setValue(e.target.value)
    const navigateToResult = () => {
        navigate(`/movies/search-result/${value}`)
        setValue('')
    }

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img src={LOGO} alt=""/>
                    <div className="search--movies">
                        <input
                            value={value}
                            onChange={handleChange}
                            type="text" placeholder="search..."/>
                        <button onClick={navigateToResult} className="search--movies__icons"><FiSearch/></button>
                    </div>
                    <div className="header--nav">
                        <NavLink to={"/home"}>Home</NavLink>
                        <NavLink to={"/popular"}>Popular</NavLink>
                        <NavLink to={"/topRated"}>Top-Rated</NavLink>

                    </div>
                    <div onClick={changeTheme}
                         className="dark-node"
                         style={{background: "white"}}>
                        {
                            mode ? "night": "dark"
                        }

                    </div>
                    <div className="header--buttons">
                        <button>Sign in</button>
                        <select style={{
                            border: "none",
                            outline: "none",
                            padding: "4px 4px",
                            borderRadius: "10px",
                            borderStyle: "1px solid white",
                            color: "white",
                            background: "black",
                            boxShadow:"box-shadow:17px -15px 3px 0px #f9f1f1 inset"
                        }} onChange={(e) => setLanguage(e.target.value)}>
                            <option value="en-US">english</option>
                            <option value="ru-RU">русский</option>
                            <option value="tr-Tr">turkish</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header