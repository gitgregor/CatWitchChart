import styled from 'styled-components'

export const Container = styled.div`
margin:0 auto;
width: 80%;
border: ${props => `1px solid ${props.theme.colors.onyx}`};
background-color: ${props => props.theme.colors.lightBlue};
font-family: ${props => props.theme.fonts[2]};
`

export const Heading = styled.h2`
font-size: ${({ isHeading, theme: { fontSizes } }) =>
        (isHeading ? fontSizes.large : fontSizes.small)
    };
color: ${({ theme: { colors } }) => (
        // colors.persianGreen
        colors.khaki
    )}  
`