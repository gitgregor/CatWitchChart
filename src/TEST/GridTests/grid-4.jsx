import React from 'react'
// import SunIcon from '../../Assets/sun.svg'
import MoonIcon from '../../Assets/moon.svg'
import Logo from '../../Assets/Logo.svg'
import SunIcon from '../../Assets/sun-icon-yellow.svg'

import { Route, Link, Switch, Redirect } from 'react-router-dom'
import User from '../../pages/UserPage'
import Admin from '../../pages/AdminPage'
import Accordion from '../../Components/Accordion/Accordion'

import '../../STYLES/Styles/scssStyles/grid4.scss'

const Grid4 = ({ changeColorToggler, DarkModeClickHandler }) => {

    console.log(changeColorToggler)
    return (
        <div className="container">
            <div className="wrapperex">
                <div className="one">
                    <img className="img-logo" src={Logo} alt="sun" />
                </div>

                <div className="two">
                    <Route path="/user"  >
                        <article>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                            <User className="main-content" />
                        </article>
                    </Route>

                    <Route path="/admin"  >
                        <article>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                            <Admin />
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
                                <Link to="/user">User</Link>
                            </li>
                            <li>
                                <Link to="/admin">Admin</Link>
                            </li>
                            {/* <li>
                                <Link to="/accordion">Accordion</Link>
                            </li> */}
                        </ul>

                        <Switch>
                            <Route exact path="/user" >
                                <Redirect to="/user" />
                            </Route>
                            <Route exact path="/admin" >
                                <Redirect to="/admin" />
                            </Route>
                            {/* <Route exact path="/accordion" >
                                <Redirect to="/accordion" />
                            </Route> */}
                        </Switch>
                    </div>
                </div>


                <div className="item">
                    {/* <div className="five"> */}
                    <div className="subitem">
                        <Accordion />
                    </div>
                </div>



                <div className="six">Six</div>
            </div>
        </div >
    )
}

export default Grid4
