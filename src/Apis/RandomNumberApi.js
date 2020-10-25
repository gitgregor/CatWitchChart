import React, { useState, useEffect, useContext } from 'react'
import GlobalDataContext from '../Contexts/contextsDeclarations'


const RandomNumberApi = () => {
    const [data, setData] = useState()
    const tda = useContext(GlobalDataContext)

    useEffect(() => {
        const f = async () => {
            if (Array.isArray(tda)) {
                const x = tda[0][0]
                console.log(x)
                await setData(x)
            }
        }
        f()
    })
    // }, [input])



    return (
        <div>
            <h3>Here will be tda</h3>
            { data ? data : "Loading ..."}
        </div>
    )

}

export default RandomNumberApi










/**
 *   here api two demantional array
 */



    // const [data, setState] = useState()
    // const [tda, setTda] = useState()

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
    //                 // console.log(twoDimensionalArray)


    //             })

    //     }, 10000)
    // })