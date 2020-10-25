import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import GlobalStyle from './STYLES/GlobalStyles/globalStyle'
import ThemeStyle from './STYLES/Theme/ThemeProvider'
// import styled from 'styled-components'
import Home from './pages/HomePage'
import User from './pages/UserPage'
import Admin from './pages/AdminPage'
import { Container, Heading } from './STYLES/Styles/styledComponents/AppStyleComponent'
// import RandomNumberApi from './Apis/RandomNumberApi'
// import Experimental from './Components/Experimental'

// const Container = styled.div`
// margin:0 auto;
// width: 80%;
// border: ${props => `1px solid ${props.theme.colors.onyx}`};
// background-color: ${props => props.theme.colors.lightBlue};
// font-family: ${props => props.theme.fonts[2]};
// `

// const Heading = styled.h2`
// font-size: ${({ isHeading, theme: { fontSizes } }) =>
//     (isHeading ? fontSizes.large : fontSizes.small)
//   };
// color: ${({ theme: { colors } }) => (
//     colors.persianGreen
//   )}  
// `




function App() {
  const darkMode = {
    day: 'white',
    night: 'black'
  }

  const [state, setState] = useState()
  const [changeColor, setChangeColor] = useState(false)

  const DarkModeClickHandler = () => {
    setChangeColor(!changeColor)
    if (changeColor === true) {
      setState(darkMode.day)
    }
    else if (changeColor === false) {
      setState(darkMode.night)
    }
  }




  return (
    <>
      <ThemeStyle>
        <Container  >
          <Heading isHeading={true} >Helo World</Heading>
          <h2>By the power of styled-components!</h2>
        </Container>


        <GlobalStyle state={state} />
        <button onClick={DarkModeClickHandler}>{changeColor === false ? 'Day Mode' : 'Dark Mode'}</button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </ThemeStyle>

    </>
  );
}

export default App;



/**
 * =======  for RandomApi Number component with async await data =============
 */

// function App() {
//   return (
//     <>
//       <h2>Random API number mode</h2>
//       <RandomNumberApi />
//     </>
//   );
// }

// export default App;




/**
 * =========  for Experimental componnent ++++++++++++++=========
 */

// function App() {
//   return (
//     <>
//     {/* <GlobalDataProvider> */}
//       <h2>Experimental mode</h2>
//       <Experimental />
// {/* <RandomNumberApi /> */}
//     {/* </GlobalDataProvider> */}
//     </>
//   );
// }


//============ for C component =================
// import C from './TEST/C'

// function App() {
//   return (
//    <C />
//   );
// }

// export default App;
