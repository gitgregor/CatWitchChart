import React, { useState, useEffect } from 'react'

const Loder = () => {
    const [datex, setData] = useState()

    useEffect(
        async () => {

            fetch('http://localhost:3005/api/getData')
                .then((data) => data.json())
                .then((res) => {
                    const dt = res.data
                    const { _id } = dt[0]
                    console.log(dt[0])
                    console.log(_id)
                    setData(_id)
                })


        }, [fetch])

    console.log(datex)
    return (
        <div>
            <br />
            Loading data :
            <br />
            {datex ? datex : "Loading ..."}
        </div>
    )

}

export default Loder


// const Loder = () => {
//     const [datex, setData] = useState()

    // const getDataFromDb = () => {
    //     setInterval(() => {
    //         fetch('http://localhost:3005/api/getData')
    //             .then((data) => data.json())
    //             .then((res) => {
    //                 const dt = res.data
    //                 const { _id } = dt[0]
    //                 console.log(dt[0])
    //                 console.log(_id)
    //                 setData(_id)
    //             })

    //     }, 10000)
    // }