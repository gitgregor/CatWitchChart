import React, { useContext } from 'react';
import GlobalDataContext from './Contexts/contextsDeclarations'
import GlobalStyle from './STYLES/GlobalStyles/globalStyle'
import ThemeStyle from './STYLES/Theme/ThemeProvider'
// import HomePage from './pages/HomePage'
import Grid4 from './TEST/GridTests/grid-4'


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
