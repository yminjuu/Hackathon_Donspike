import Svg from './assets/prevArrow.svg?react';
import styled from 'styled-components';

const PrevArrow = ({ className, onClick }) => {
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

export default PrevArrow;
