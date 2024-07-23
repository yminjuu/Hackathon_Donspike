import Tooltip from '../assets/imgs/AverageGraphToolTip.svg?react';
import styled from 'styled-components';

const BalloonContainer = styled.div`
  /* position: absolute의 기준이 되는 부모 요소 */
  position: relative;
  width: 10.875rem;
  height: 14rem;
  flex-shrink: 0;
  flex-shrink: 0;
`;

const TooltipStyled = styled(Tooltip)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  bottom: 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
`;

const AverageGraphToolTip = ({ text }) => (
  <BalloonContainer>
    <TooltipStyled />
    <TextContainer>{text}</TextContainer>
  </BalloonContainer>
);

export default AverageGraphToolTip;
