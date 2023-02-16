import {ColorContext} from "./index";
import {useState} from "react";

function Context() {
    const [color, setColor] = useState('white')
    return(
        <ColorContext.Provider value={{color,setColor}}>
            {children}
        </ColorContext.Provider>
    )
}