import styled from 'styled-components'

export const HeaderContainer = styled.header`
background-image: url(/cover.svg);
background-size: cover;
background-color: ${props => props.theme["base-profile"]}
`

export const HeaderWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;

img {
padding-top: 4rem;
padding-bottom: 8rem;
}
`

