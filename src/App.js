import React, { useContext } from 'react';
import GlobalDataContext from './Contexts/contextsDeclarations'
import GlobalStyle from './STYLES/GlobalStyles/globalStyle'
import ThemeStyle from './STYLES/Theme/ThemeProvider'
import HomePage from './pages/HomePage'

// import GridTest from './TEST/GridTests/grid-test'
// import GridTest1 from './TEST/GridTests/grid-test1'
// import GridTest2 from './TEST/GridTests/grid-test2'
import GridTest3 from './TEST/GridTests/grid-test3'


function App() {

  const { globDarkModeColor, changeColorToggler, DarkModeClickHandler } = useContext(GlobalDataContext)


  console.log(changeColorToggler)
  console.log(globDarkModeColor)
  return (
    <>
      <ThemeStyle >

        {/* <GridTest /> */}
        {/* <GridTest1 /> */}
        {/* <GridTest2 /> */}
        <GridTest3 />

        {/* <GlobalStyle globDarkModeColor={globDarkModeColor} changeColorToggler={changeColorToggler} />

        <HomePage globDarkModeColor={globDarkModeColor} changeColorToggler={changeColorToggler} DarkModeClickHandler={DarkModeClickHandler} /> */}

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
