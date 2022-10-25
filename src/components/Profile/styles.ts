import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin-top: -4rem;
  gap: 2rem;

  padding: 2rem 2.5rem;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;

  filter: drop-shadow(0 1rem 0.75rem ${(props) => props.theme["base-input"]});
  background-color: ${(props) => props.theme["base-profile"]};

  img {
    width: 150px;
    border-radius: 8px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProfileInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    gap: 5px;

    font-weight: 600;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }
`;

export const ProfileSocial = styled.div`
  display: flex;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  svg {
    color: ${(props) => props.theme["base-label"]};
  }
`;