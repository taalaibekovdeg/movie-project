import React, {useState} from "react";
import {ColorContext, LanguageContext} from "./index"


function Context({children}) {
    const [color, setColor] = useState('white')
    const [language, setLanguage] = useState('en-US')
    return (

            <LanguageContext.Provider value={{language, setLanguage}}>
                {children}
            </LanguageContext.Provider>



)
}


export default Context