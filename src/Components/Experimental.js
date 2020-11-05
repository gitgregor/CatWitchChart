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

                {/* .row>.col* */}
                {/* and enter */}

                {/* doing as below */}

                {/* <div className="row">
    <div className="col"></div>
</div> */}

            </p>
        </Provider>
    )
}

export default Experimental


// class  extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (  );
//     }
// }

// export default ;
