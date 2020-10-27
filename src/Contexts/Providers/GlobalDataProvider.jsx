import React, { useState, useEffect } from 'react'

import GlobalDataContext from '../contextsDeclarations'



const GlobalDataProvider = ({ children }) => {

    const [globDarkModeColor, setglobDarkModeColor] = useState()
    const [changeColorToggler, setchangeColorToggler] = useState(false)

    const darkMode = {
        day: 'white',
        night: 'black'
    }

    const DarkModeClickHandler = async () => {
        if (changeColorToggler === true) {
            setglobDarkModeColor(darkMode.day)
        }
        else if (changeColorToggler === false) {
            setglobDarkModeColor(darkMode.night)
        }
        await setchangeColorToggler(!changeColorToggler)
        // await setchangeColorToggler(!changeColorToggler)
        // if (changeColorToggler === true) {
        //     setglobDarkModeColor(darkMode.day)
        // }
        // else if (changeColorToggler === false) {
        //     setglobDarkModeColor(darkMode.night)
        // }
    }

    return (
        <GlobalDataContext.Provider
            value={
                {
                    globDarkModeColor: globDarkModeColor,
                    changeColorToggler: changeColorToggler,
                    DarkModeClickHandler: DarkModeClickHandler,
                }
            }
        >
            {children}
        </GlobalDataContext.Provider>
    )
}

export default GlobalDataProvider
