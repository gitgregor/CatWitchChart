import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import User from './UserPage'
import Admin from './AdminPage'

import './styles/mainFlexContainer.css'

const HomePage = ({ changeColorToggler, DarkModeClickHandler }) => {
    return (
        <div>

            <div class="wrapper">
                <header class="header">
                    <h2>Home page</h2>
                    Header
                    <button onClick={DarkModeClickHandler}>{changeColorToggler === false ? 'Day Mode' : 'Dark Mode'}</button>
                </header>

                <article class="main">
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                </article>

                <aside class="aside aside-1">
                    <ul>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                    </ul>

                    <Route path="/user">
                        <User />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                </aside>

                <aside class="aside aside-2">Aside 2</aside>
                <footer class="footer">Footer</footer>
            </div>
        </div>
    )
}

export default HomePage
