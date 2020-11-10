import React, { useState, useEffect, createContext, useContext } from 'react';
import StockChart from '../../Charts/StockChart'

export const Context = createContext()


export const Provider = ({ children }) => {

    const [data, setState] = useState()
    const [tda, setTda] = useState()

    useEffect(() => {

        setInterval(() => {

            fetch('https://randomuser.me/api/?format=json&results=1')
                //    fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(res => res.json())
                .then(json => {
                    const { results } = json
                    const location = results[0].location
                    const street = location.street
                    const number = street.number
                    setState(number)
                    // const {results} = json
                    // const gender = results[0].gender
                    // const name = results[0].name
                    // const first = name.first
                    // setState(first)


                    var count = 1;
                    var twoDimensionalArray = [];


                    // const event2 = new Date();
                    // let time = event2.getTime();

                    let time = Date.now();
                    // let time = Date.now()+7200000;

                    for (var i = 0; i < 6; i++) {
                        var datax = [];
                        for (var j = 0; j < 2; j++) {
                            if (j === 0) {
                                datax.push(number);
                                // data.push("Test" + count);
                                count++;
                            }
                            else if (j === 1) {
                                datax.push(time)
                            }
                        }

                        twoDimensionalArray.push(datax);
                        setTda(twoDimensionalArray)
                    }
                })
        }, 10000)
    })


    // const state = {
    //     name:  "Gregor"
    // }

    // console.log(children)
    return (
        <Context.Provider
            value={{ tda }}
        >
            {children}
        </Context.Provider>
    )
}



const A1 = () => {
    return <A2 />
}
const A2 = () => {
    return <A3 />
}
const A3 = () => {
    return <A4 />
}
const A4 = () => {
    return <A5 />
}
const A5 = () => {
    const { tda } = useContext(Context)

    console.log(tda)
    return (
        <>
            {/* {state.name} */}
            <p>A5</p>
        </>
    )
}



const C = () => {
    return (
        <Provider>
            <A1 />
            <StockChart />
        </Provider>
    )
}

export default C
