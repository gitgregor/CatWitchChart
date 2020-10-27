import { createGlobalStyle } from 'styled-components'

// const theme = {
//     backgrounColor: `${state}`
// }



const GlobalStyle = createGlobalStyle`
html, body, #root {
    margin: 0;
    padding: 0;
}

body{
    background-color: ${props => (props.globDarkModeColor ? props.globDarkModeColor : 'white')}
}

.button{
    background-color:  ${props => (props.changeColorToggler ? props.globDarkModeColor : 'white')};
    color:  ${props => (props.changeColorToggler ? 'white'
        :
        !props.changeColorToggler ? "black"
            :
            props.globDarkModeColor)};
        }

.header{
    background-color: ${props => (props.changeColorToggler ? 'gray' : 'cadetblue')};
    opacity: ${props => (props.changeColorToggler ? '0.4' : '1')};

}

.aside-1, .aside-2{
    /* background-color: ${props => (props.changeColorToggler ? '#141322' : 'green')} */
    /* background-color: ${props => (props.changeColorToggler ? '#141322' : '#035456')} */
    background-color: ${props => (props.changeColorToggler ? '#141322' : '#1f8d8f')}
}

.footer{
    background-color: ${props => (props.changeColorToggler ? 'gray' : '#035456')};
    opacity: ${props => (props.changeColorToggler ? '0.4' : '1')};
}

`


export default GlobalStyle

// lightslategray - gray color
//Wrought Iron
//Steal Wool