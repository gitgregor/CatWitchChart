import React, { useState, useEffect, useContext } from 'react'
import Provider from '../Contexts/Providers/GlobalDataProvider'
import GlobalDataContext from '../Contexts/contextsDeclarations'



const Experimental = () => {

    const ctnx = useContext(GlobalDataContext)

    console.log(ctnx)
    return (
        <Provider>
            kogo
            <p>
                {ctnx}

            </p>
        </Provider>
    )
}

export default Experimental
