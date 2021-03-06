import React, { useState, useEffect } from 'react'

import GlobalDataContext from '../contextsDeclarations'



const GlobalDataProvider = ({ children }) => {

    const [globDarkModeColor, setglobDarkModeColor] = useState()
    const [changeColorToggler, setchangeColorToggler] = useState(false)


    const [HideSlideClick, setHideSlideClick] = useState(false)
    const [sliderWidth, setSliderWidth] = useState("25vw")

    const [datex, setData] = useState()

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


    const Loder = () => {


        useEffect(
            () => {

                return new Promise(resolve => {
                    setTimeout(function () {
                        resolve(

                            fetch('http://localhost:3005/api/getData')
                                .then((data) => data.json())
                                .then((res) => {
                                    const dt = res.data
                                    const { _id } = dt[0]
                                    console.log(dt[0])
                                    console.log(_id)
                                    setData(_id)
                                })
                        )
                        console.log("promise FOR FETCH is done")
                    }, 100)
                })





            }, [fetch])

        // console.log(datex)
        // return (
        //     <div>
        //         <br />
        //     Loading data :
        //         <br />
        //         {datex ? datex : "Loading ..."}
        //     </div>
        // )

    }

    Loder()

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
                    datex
                }
            }
        >
            { children}
        </GlobalDataContext.Provider>
    )
}

export default GlobalDataProvider
