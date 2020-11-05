import React, { useState } from 'react'

const Loder = () => {
    const [datex, setData] = useState()

    const getDataFromDb = () => {
        setInterval(() => {
            fetch('http://localhost:3005/api/getData')
                .then((data) => data.json())
                .then((res) => {
                    const dt = res.data
                    const { _id } = dt[0]
                    console.log(dt[0])
                    console.log(_id)
                    setData(_id)
                })

        }, 10000)

    }

    getDataFromDb()

    console.log(datex)
    return (
        <div>
            Loader ...
            <br />
            {datex}
        </div>
    )

}

export default Loder
