import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components'

// const theme = {
//     backgrounColor: `${state}`
// }

const GlobalStyle = createGlobalStyle`
body{
    background-color: ${props => (props.globDarkModeColor ? props.globDarkModeColor : 'white')}
}`

export default GlobalStyle