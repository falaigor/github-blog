import styled from 'styled-components'

export const ProfileContainer = styled.div`
max-width: 54rem;
width: 100%;
margin-top: -4rem;

padding: 2rem 2.5rem;
border-radius: 8px;

display: flex;
justify-content: space-between;

background-color: ${props => props.theme["base-profile"]};
`