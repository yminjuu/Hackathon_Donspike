import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/imgs/Logo.svg?react';

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  width: 100px;
  height: 30px;
`;

const LogoButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Logo></Logo>
  </Button>
);

export default LogoButton;
