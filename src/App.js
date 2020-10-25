import React, { useContext } from 'react';
import GlobalDataContext from './Contexts/contextsDeclarations'
import GlobalStyle from './STYLES/GlobalStyles/globalStyle'
import ThemeStyle from './STYLES/Theme/ThemeProvider'
import HomePage from './pages/HomePage'


function App() {

  const { globDarkModeColor, changeColorToggler, DarkModeClickHandler } = useContext(GlobalDataContext)

  return (
    <>
      <ThemeStyle >
        <GlobalStyle globDarkModeColor={globDarkModeColor} />
        <HomePage globDarkModeColor={globDarkModeColor} changeColorToggler={changeColorToggler} DarkModeClickHandler={DarkModeClickHandler} />
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
