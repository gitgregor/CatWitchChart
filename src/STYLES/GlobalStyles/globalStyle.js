import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components'

// const theme = {
//     backgrounColor: `${state}`
// }

const GlobalStyle = createGlobalStyle`
body{
    background-color: ${props => (props.state ? props.state : 'white')}
}`

export default GlobalStyle