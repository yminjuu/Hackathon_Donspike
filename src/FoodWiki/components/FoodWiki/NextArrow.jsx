import Svg from './assets/nextArrow.svg?react';
import styled from 'styled-components';

const NextArrow = ({ className, onClick }) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      <Svg></Svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  cursor: pointer;
`;

export default NextArrow;
