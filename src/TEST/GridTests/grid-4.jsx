import React, { useContext } from 'react'
import GlobalDataContext from '../../Contexts/contextsDeclarations'

// import SunIcon from '../../Assets/sun.svg'
import MoonIcon from '../../Assets/moon.svg'
import Logo from '../../Assets/Logo.svg'
import SunIcon from '../../Assets/sun-icon-yellow.svg'

import { Route, Link, Switch, Redirect } from 'react-router-dom'
import User from '../../pages/UserPage'
import Admin from '../../pages/AdminPage'
import DataGrid from '../../Components/Tables/DataGrid/DataGrid'
import Accordion_copy_v1 from '../../Components/Accordion/Accordion_copy_v1'
import MenuVertical from '../../Components/Menu/MenuVertical'
import Loader from '../../Components/Loader/Loder'
import DrawerW3C from '../../Components/Drawer/DrawerW3C'


import '../../STYLES/Styles/scssStyles/grid4.scss'
// import '../../STYLES/Styles/cssStyles/flex4.css'


const Grid4 = ({ changeColorToggler, DarkModeClickHandler, HideSlideClick, SliderClickHandler, sliderWidth }) => {

    const { datex } = useContext(GlobalDataContext)

    const testString = "Gherkin with Cypress tests for React"

    // console.log(changeColorToggler)
    return (
        <div className="container">
            <div className="wrapperex">
                <div className="one">
                    <img className="img-logo" src={Logo} alt="sun" />
                </div>

                <div className="two">

                    <div className="test__cy-gherkin">
                        <br />
                        <hr />
                        <br />
                    /**
                    * input for the test reasons only
                    */

                    <br />
                        <hr />
                        <br />
                        <input className="input__test" type="text" />

                        <br />
                        <hr />
                        <br />

                        /**
                        * button for the test reasons only
                        */
                    <br />
                        <hr />
                        <br />

                        <button className="button__test" >Test button</button>

                        <br />
                        <hr />
                        <br />
                    /**
                    * div content box for the test reasons only
                    */
                     <br />
                        <hr />
                        <br />

                        <div className="content-box"
                            style={{ border: "2px solid green" }}
                        >
                            {testString}
                        </div>
                    </div>


                    <Route path="/user"  >
                        <article style={{ width: "50vw", margin: "0 auto" }}>
                            <br />
                            <br />
                            <br />
                            <p className="paragraph"><h1>This is main user page</h1></p>
                            <br />
                            <hr />
                            <br />
                            <User className="main-content" />
                        </article>
                    </Route>

                    <Route path="/maingrid"  >
                        <article style={{ width: "50vw", margin: "0 auto" }}>
                            <br />
                            <br />
                            <br />
                            <p className="paragraph">  <h1>This is main grid for all api data</h1> </p>
                            <br />
                            <hr />
                            <br />
                            {/* <Admin /> */}
                            {/* <Form /> */}


                        </article>
                    </Route>



                    <Route path="/accgrid"  >
                        <article style={{ width: "50vw", margin: "0 auto" }}>
                            <br />
                            <br />
                            <br />
                            <p className="paragraph">  <h1>This is accordion grid </h1> </p>
                            <br />
                            <hr />
                            <br />
                            {/* <Admin /> */}
                            {/* <Form /> */}
                            <DataGrid datex={datex} />

                        </article>
                    </Route>


                    <Route path="/removep3"  >
                        <article style={{ width: "50vw", margin: "0 auto" }}>
                            <br />
                            <br />
                            <br />
                            <p className="paragraph">  <h1>Remove section for P3</h1> </p>
                            <br />
                            <hr />
                            <br />
                            {/* <Admin /> */}
                            {/* <Form /> */}
                            {/* <DataGrid /> */}

                        </article>
                    </Route>

                    <Route path="/addpersonp1"  >
                        <article style={{ width: "50vw", margin: "0 auto" }}>
                            <br />
                            <br />
                            <br />
                            <p className="paragraph">  <h1>Add Person p1</h1> </p>
                            <br />
                            <hr />
                            <br />

                            <DrawerW3C />

                        </article>
                    </Route>


                </div>

                <div className="three">
                    {
                        changeColorToggler
                            ?
                            <div className="sun-shrink">
                                <img className="sun-icon" src={SunIcon} alt="Sun" onClick={DarkModeClickHandler} />
                            </div>
                            :
                            <div>
                                <img className="moon-icon" src={MoonIcon} alt="Sun" onClick={DarkModeClickHandler} />
                            </div>
                    }
                </div>

                <div className="four">
                    {/* <div className="aside-1-content"> */}
                    <ul>
                        <li>
                            <Link to="/user" className="link-user">User</Link>
                        </li>
                        <li>
                            <Link to="/maingrid" className="link-admin">Main Grid</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path="/user" >
                            <Redirect to="/user" />
                        </Route>
                        <Route exact path="/maingrid" >
                            <Redirect to="/maingrid" />
                        </Route>
                    </Switch>
                    {/* </div> */}
                    <MenuVertical />
                </div>

                {/* <div className="five"> */}
                <div className="item">
                    {/* <div className="subitem"> */}
                    <Accordion_copy_v1 />
                    {/* </div> */}
                    {/* <Loader /> */}
                </div>

                <div className="six">Six</div>
            </div>
        </div >
    )
}

export default Grid4
