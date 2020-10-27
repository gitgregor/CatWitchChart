
import React from 'react'
import Logo from '../../Assets/Logo.svg'
import '../../STYLES/Styles/scssStyles/grid-test3.scss'

const GridTest = () => {
    return (
        <div className="wrapper-main" >
            <div className="grid">
                <div className="header">
                    <div className="logo-header">
                        <img className="img-logo" src={Logo} alt="Logo" />
                        <p style={{ textAlign: "center" }}>Logo desc</p>
                    </div>
                    <div className="dm-button">
                        <button>button</button>
                    </div>
                </div>


                <div className="aside-1">
                    <div className="aside-1-content">
                        aside-1
                </div>
                </div>

                <div className="main">
                    <div className="main-content">
                        <main></main>
                    </div>
                </div>


                <div className="aside-2">
                    <div className="aside-2-content">
                        aside-2
                </div>
                </div>


                <div className="footer">
                    <div className="footer-content">footer</div>

                </div>
            </div>
        </div>
    )
}

export default GridTest

