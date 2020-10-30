
import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import User from '../pages/UserPage'
import Admin from '../pages/AdminPage'
import Logo from '../Assets/Logo.svg'
import SunIcon from "../Assets/sun.svg";
import MoonIcon from "../Assets/moon.svg";
import '../STYLES/Styles/scssStyles/grid-test3.scss'

const GridTest = ({ changeColorToggler, DarkModeClickHandler }) => {
    return (
        <div className="wrapper-main" >
            <div className="grid">
                <div className="header">
                    <div className="logo-header">
                        <img className="img-logo" src={Logo} alt="Logo" />
                        <p style={{ textAlign: "center" }}>Logo desc</p>
                    </div>

                    <div className="dm-to-center">
                        {
                            changeColorToggler
                                ?
                                <div className="dark-mode-icon  center">
                                    <img className="sun-icon" src={SunIcon} alt="Sun" onClick={DarkModeClickHandler} />
                                </div>
                                :
                                <div className="dark-mode-icon  center">
                                    <img className="sun-icon" src={MoonIcon} alt="Sun" onClick={DarkModeClickHandler} />
                                </div>
                        }
                    </div>
                </div>

                <div className="aside-1">
                    <div className="aside-1-content">
                        <ul>
                            <li>
                                <Link to="/user">User</Link>
                            </li>
                            <li>
                                <Link to="/admin">Admin</Link>
                            </li>
                        </ul>

                        <Switch>
                            <Route exact path="/user" >
                                <Redirect to="/mainlayoutUser" />
                            </Route>
                            <Route exact path="/admin" >
                                <Redirect to="/mainlayoutAdmin" />
                            </Route>
                        </Switch>
                    </div>
                </div>

                <div className="main">
                    <div className="main-content">
                        <Route path="/mainlayoutUser"  >
                            <article>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                <User />
                            </article>
                        </Route>

                        <Route path="/mainlayoutAdmin"  >
                            <article>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                <Admin />
                            </article>
                        </Route>
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
        </div >
    )
}

export default GridTest

