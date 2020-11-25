
import React from 'react'
import { BrowserRouter as Router, Route, Link,  NavLink } from 'react-router-dom'


import './FlexboxLayout.scss'

const Home = ()=> <div>Home</div>
const News = ()=> <div>News</div>
const Kontakt = ()=> <div>Kontakt</div>


const FlexboxLayout = () => {
    return (
        <Router>
            <div class="wrapperex">
            <header class="headerex">Header</header>
            <article class="mainer">
                <p>Bla bla bla</p>
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News} />
                <Route path="/contact" component={Kontakt} />
            </article>
            <aside class="asidex aside-1x">Aside 1
                <nav>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                </ul>
            </nav></aside>
            <aside class="asidex aside-2x">Aside 2</aside>
            <footer class="footerex">
                Footer
                <Route path="/contact" component={Kontakt} />
            </footer>
        </div>
        </Router>
     
    )
}

export default FlexboxLayout


