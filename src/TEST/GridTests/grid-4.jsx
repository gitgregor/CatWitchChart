import React from 'react'
// import SunIcon from '../../Assets/sun.svg'
import MoonIcon from '../../Assets/moon.svg'
import Logo from '../../Assets/Logo.svg'
import SunIcon from '../../Assets/sun-icon-yellow.svg'

import { Route, Link, Switch, Redirect } from 'react-router-dom'
import User from '../../pages/UserPage'
import Admin from '../../pages/AdminPage'
import Accordion_copy_v1 from '../../Components/Accordion/Accordion_copy_v1'
import MenuVertical from '../../Components/Menu/MenuVertical'
import Loader from '../../Components/Loader/Loder'


import '../../STYLES/Styles/scssStyles/grid4.scss'

const Grid4 = ({ changeColorToggler, DarkModeClickHandler, HideSlideClick, SliderClickHandler, sliderWidth }) => {

    // console.log(changeColorToggler)
    return (
        <div className="container">
            <div className="wrapperex">
                <div className="one">
                    <img className="img-logo" src={Logo} alt="sun" />
                </div>

                <div className="two">
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
                            <Admin />
                            {/* <Form /> */}

                        </article>
                    </Route>
                </div>

                <div className="three">
                    {
                        changeColorToggler
                            ?
                            <div>
                                <img className="sun-icon" src={SunIcon} alt="Sun" onClick={DarkModeClickHandler} />
                            </div>
                            :
                            <div>
                                <img className="moon-icon" src={MoonIcon} alt="Sun" onClick={DarkModeClickHandler} />
                            </div>
                    }
                </div>

                <div className="four">
                    <div className="aside-1-content">
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
                    </div>
                    <MenuVertical />
                </div>

                {/* <div className="five"> */}
                <div className="item">
                    {/* <div className="subitem"> */}
                    <Accordion_copy_v1 />
                    {/* </div> */}
                    <Loader />
                </div>

                <div className="six">Six</div>
            </div>
        </div >
    )
}

export default Grid4
