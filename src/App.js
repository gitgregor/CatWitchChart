import React, { useContext } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import GlobalDataContext from './Contexts/contextsDeclarations'
import GlobalStyle from './STYLES/GlobalStyles/globalStyle'
import ThemeStyle from './STYLES/Theme/ThemeProvider'
// import HomePage from './pages/HomePage'
import Grid4 from './TEST/GridTests/grid-4'
import DrawerW3C from './Components/Drawer/DrawerW3C'


function App() {

  const { globDarkModeColor, changeColorToggler, DarkModeClickHandler, HideSlideClick, SliderClickHandler, sliderWidth } = useContext(GlobalDataContext)


  // console.log(changeColorToggler)
  // console.log(globDarkModeColor)
  return (
    <>


      <ThemeStyle >
        <GlobalStyle globDarkModeColor={globDarkModeColor} changeColorToggler={changeColorToggler} />


        <Grid4 globDarkModeColor={globDarkModeColor} changeColorToggler={changeColorToggler} DarkModeClickHandler={DarkModeClickHandler} />

        {/* <HomePage globDarkModeColor={globDarkModeColor} changeColorToggler={changeColorToggler} DarkModeClickHandler={DarkModeClickHandler} /> */}
      </ThemeStyle>


      {/* <Route path="/addpersonp1"  >
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
      </Route> */}

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
