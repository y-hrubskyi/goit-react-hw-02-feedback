import styled from 'styled-components';

export const ButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 4px 12px;

  text-transform: capitalize;

  background-color: transparent;
  border-radius: 8px;

  transition: color 250ms linear, background-color 250ms linear;

  &:hover {
    background-color: blue;
    color: white;
  }
`;
