import React, { useState, useEffect } from 'react'

import GlobalDataContext from '../contextsDeclarations'



const GlobalDataProvider = ({ children }) => {
    const [data, setState] = useState()
    const [tda, setTda] = useState()

    // useEffect(() => {
    //     setInterval(() => {
    //         fetch('https://randomuser.me/api/?format=json&results=1')
    //             //    fetch('https://jsonplaceholder.typicode.com/todos/1')
    //             .then(res => res.json())
    //             .then(json => {
    //                 const { results } = json
    //                 const location = results[0].location
    //                 const street = location.street
    //                 const number = street.number
    //                 setState(number)
    //                 // const {results} = json
    //                 // const gender = results[0].gender
    //                 // const name = results[0].name
    //                 // const first = name.first
    //                 // setState(first)

    //                 var count = 1;
    //                 var twoDimensionalArray = [];
    //                 let time = Date.now() + 7200000;

    //                 for (var i = 0; i < 6; i++) {
    //                     var datax = [];
    //                     for (var j = 0; j < 2; j++) {
    //                         if (j === 0) {
    //                             datax.push(number);
    //                             // data.push("Test" + count);
    //                             count++;
    //                         }
    //                         else if (j === 1) {
    //                             datax.push(time)
    //                         }
    //                     }

    //                     twoDimensionalArray.push(datax);
    //                     setTda(twoDimensionalArray)
    //                 }
    //             })

    //     }, 10000)
    // })

    const [globDarkModeColor, setglobDarkModeColor] = useState()
    const [changeColorToggler, setchangeColorToggler] = useState(false)

    const darkMode = {
        day: 'white',
        night: 'black'
    }

    // useEffect(() => {
    const DarkModeClickHandler = async () => {
        await setchangeColorToggler(!changeColorToggler)
        if (changeColorToggler === true) {
            setglobDarkModeColor(darkMode.day)
        }
        else if (changeColorToggler === false) {
            setglobDarkModeColor(darkMode.night)
        }
    }
    // })



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

{/* <GlobalDataContext.Provider
            value={tda}
        > */}