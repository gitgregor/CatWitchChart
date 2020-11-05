import React, { useState } from 'react'
import LoginFormik from '../Form/FORMIK/LoginFormik'

import './DrawerW3C.styles.css'

const DrawerW3C = ({ closeNav, state }) => {


    // const [state, setstate] = useState("0vw")

    // function openNav() {
    //     setstate("25vw")
    //     // document.getElementById("mySidenav").style.width = "250px";
    // }

    // function closeNav() {
    //     setstate("0vw")
    //     // document.getElementById("mySidenav").style.width = "0";
    // }


    // console.log(state)
    return (
        <div>

            <div style={{ width: state, zIndex: "5" }} id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                {/* <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a> */}

                <LoginFormik />
                {/* <label htmlFor="i1">label1</label>
                <input name="i1" type="text" />
                <input type="text" />
                <input type="text" /> */}
            </div>


            {/* <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>&#9776; open</span> */}


        </div>
    )
}

export default DrawerW3C




