import React, { useState } from 'react'

import GlobalDataContext from '../contextsDeclarations'



const GlobalDataProvider = ({ children }) => {

    const [globDarkModeColor, setglobDarkModeColor] = useState()
    const [changeColorToggler, setchangeColorToggler] = useState(false)


    const [HideSlideClick, setHideSlideClick] = useState(false)
    const [sliderWidth, setSliderWidth] = useState("25vw")

    const darkMode = {
        day: 'white',
        night: 'black'
    }

    const DarkModeClickHandler = () => {
        if (changeColorToggler === true) {
            setglobDarkModeColor(darkMode.day)
        }
        else if (changeColorToggler === false) {
            setglobDarkModeColor(darkMode.night)
        }
        setchangeColorToggler(!changeColorToggler)

    }


    const SliderClickHandler = () => {
        if (HideSlideClick === false) {
            setSliderWidth("25vw")
            setHideSlideClick(HideSlideClick)
        }
        // console.log(HideSlideClick)
    }




    return (
        <GlobalDataContext.Provider
            value={
                {
                    globDarkModeColor: globDarkModeColor,
                    changeColorToggler: changeColorToggler,
                    DarkModeClickHandler: DarkModeClickHandler,
                    sliderWidth,
                    HideSlideClick,
                    SliderClickHandler,
                }
            }
        >
            { children}
        </GlobalDataContext.Provider >
    )
}

export default GlobalDataProvider
