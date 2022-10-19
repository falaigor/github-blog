import styled from 'styled-components'

export const HomeContainer = styled.main`
max-width: 54rem;
width: 100%;
display: flex;
justify-content:center;
align-items:center;
margin: 0 auto;

`

export const ProfileWrapper = styled.div`
max-width: 54rem;
width: 100%;
margin-top: -4rem;

padding: 2rem 2.5rem;
border-radius: 8px;

display: flex;
justify-content: space-between;

background-color: ${props => props.theme["base-profile"]};
`