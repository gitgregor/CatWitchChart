import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        powderWhite: "#FFFDF9",
        persianGreen: "#06B49A",
        lightBlue: "#AFDBD2",
        // onyx: "red",
        onyx: "#36313D",
        khaki: "#448058"
    },
    fonts: ["sans-serif", "Roboto", "Verdana", "Geneva", "Tahoma", "Arial", "Helvetica"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}



const darkMode = {
    day: 'white',
    night: 'black'
}


const Theme = ({ children }) => (
    <ThemeProvider theme={theme} >
        {children}
    </ThemeProvider>
)



export default Theme





// const theme = {
//     global: {

//     },
//     dayMode: {
//         colors: {
//             backgroundLight: "",
//             backgroundNormal: "",
//             backgroundStrong: "",
//             backgroundKhaki: "",
//             fontColors: {
//                 black: '',
//                 white: '',
//                 light: '',
//                 normal: '',
//                 strong: '',
//             }
//         },
//         fontsFamily: [, , ,],
//         fontSizes: {
//             small: "",
//             medium: "",
//             large: "",
//         }
//     },
//     darkMode: {
//         colors: {
//             backgroundLight: "",
//             backgroundNormal: "",
//             backgroundStrong: "",
//             backgroundKhaki: "",
//             fontColors: {
//                 black: '',
//                 white: '',
//                 light: '',
//                 normal: '',
//                 strong: '',
//                 grayWhite: '',
//                 grayNormal: '',
//                 grayStrong: '',
//             }
//         },
//         fontsFamily: [, , ,],
//         fontSizes: {
//             small: "",
//             medium: "",
//             large: "",
//         }
//     }
// }