import styled from 'styled-components';

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const Button = styled.button`
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(3)};

  text-transform: capitalize;

  background-color: transparent;
  border-radius: ${p => p.theme.radii.md};

  transition: ${p => p.theme.transition('color')},
    ${p => p.theme.transition('background-color')};

  &:hover {
    background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.white};
  }
`;
