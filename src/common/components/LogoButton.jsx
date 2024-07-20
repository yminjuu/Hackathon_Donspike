import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/imgs/Logo.svg?react';

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  width: 91.103px;
  height: 53px;
  flex-shrink: 0;
`;

const LogoButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Logo></Logo>
  </Button>
);

export default LogoButton;
