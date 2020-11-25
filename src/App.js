import React from 'react';
// import React, { useContext } from 'react';
// import { Route, Link, Switch, Redirect } from 'react-router-dom'

// import GlobalDataContext from './Contexts/contextsDeclarations'
// import GlobalStyle from './STYLES/GlobalStyles/globalStyle'
// import ThemeStyle from './STYLES/Theme/ThemeProvider'
// // import HomePage from './pages/HomePage'
// import Grid4 from './TEST/GridTests/grid-4'
// import DrawerW3C from './Components/Drawer/DrawerW3C'
// import Menago from './pages/Menago/Menago'
import FlexboxTests from './TEST/FlexboxTests/FlexboxTests'
import WrappingFxT from './TEST/FlexboxTests/wrapping/wrapping'
import FlexibleSizing from './TEST/FlexboxTests/flexibleSizing/flexibleSizing'
import HorizAndVetrticalAlingment from './TEST/FlexboxTests/horizAndVetrticalAlingment/horizAndVetrticalAlingment'
import NestedFlexBoxes from './TEST/FlexboxTests/nestedFlexBoxes/nestedFlexBoxes'
import FlexboxLayout from './TEST/FlexboxTests/LayoutCssTricksFlexExample/FlexboxLayout'




function App() {

  // const { globDarkModeColor, changeColorToggler, DarkModeClickHandler, HideSlideClick, SliderClickHandler, sliderWidth } = useContext(GlobalDataContext)


  // console.log(changeColorToggler)
  // console.log(globDarkModeColor)
  return (
    <>
      <FlexboxLayout />
      {/* <NestedFlexBoxes /> */}
      {/* <HorizAndVetrticalAlingment /> */}
      {/* <FlexibleSizing /> */}
      {/* <WrappingFxT /> */}
      {/* <FlexboxTests /> */}
      {/* <Menago /> */}

      {/* <ThemeStyle >
        <GlobalStyle globDarkModeColor={globDarkModeColor} changeColorToggler={changeColorToggler} />

        <Grid4 globDarkModeColor={globDarkModeColor} changeColorToggler={changeColorToggler} DarkModeClickHandler={DarkModeClickHandler} />
      </ThemeStyle> */}
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
