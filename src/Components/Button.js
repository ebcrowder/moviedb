import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 6rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  &:hover {
    color: #222;
    background: white;
  }
  box-shadow: 0 0 35px black;
`;

const ButtonClass = props => {
  return <Button>{props.text}</Button>;
};

export default ButtonClass;
