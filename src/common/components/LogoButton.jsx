import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import Logo from '../assets/Logo.svg?react';
import { Navigate, useNavigate } from 'react-router-dom';

import { FoodWikiIdContext } from '../../FoodWiki/pages/FoodWikiPage';
import { FoodInfoIdContext } from '../../FoodWiki/pages/FoodInfoPage';
import { MainGraphIdContext } from '../../MainGraph/pages/MainGraphPage';
import { AddMealIdContext } from '../../AddMeal/pages/AddMealPage';

const LogoButton = ({ currState }) => {
  const id =
    useContext(FoodWikiIdContext) ||
    useContext(MainGraphIdContext) ||
    useContext(FoodInfoIdContext) ||
    useContext(AddMealIdContext);

  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        console.log('클릭');
        if (currState === 'graph' || currState === 'foodwiki') {
          navigate(`/main/${id}`);
        }
      }}
      $currState={currState}
    >
      <Logo></Logo>
    </Button>
  );
};

const Button = styled.button`
  border: none;
  padding: 0;
  ${props =>
    props.$currState === 'graph' || props.$currState === 'foodwiki'
      ? css`
          cursor: pointer;
        `
      : css``}
  width: 5.375rem;
  height: 5rem;
  margin-left: 2.5rem;
  flex-shrink: 0;

  background: transparent;
`;

export default LogoButton;
