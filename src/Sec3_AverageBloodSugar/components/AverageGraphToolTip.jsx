import Tooltip from '../assets/AverageGraphToolTip.svg?react';
import { styled, css } from 'styled-components';

const BalloonContainer = styled.div`
  /* position: absolute의 기준이 되는 부모 요소 */
  position: relative;
  width: 10.875rem;
  height: 14rem;
  flex-shrink: 0;
  flex-shrink: 0;
  margin-right: 1rem;
`;

const TooltipStyled = styled(Tooltip)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 0rem;
  left: 1.5rem;
  right: 0rem;
  bottom: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;

  height: 13rem;
  width: 8rem;
  word-break: keep-all; /* 단어 기준 줄바꿈 */
  overflow-wrap: break-word; /* 넘칠 경우 글자 기준 줄바꿈 */

  color: #414141;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.15rem;
`;

const BSSpan = styled.span`
  ${props =>
    props.$offset > 0
      ? // 다중 속성을 사용
        css`
          color: #d33f3f;
        `
      : css`
          color: #3053f9;
        `};
`;

// props로 전달된 지난 달과의 차이값이
// 양수면 => 저번달에 비해 공복 평균 혈당이 {offset}mg/dl 증가했어요! 혈당 관리에 조금 더 힘 써주세요.
// 0이면 => 저번달과 공복 평균 혈당이 동일해요!
// 음수면 => 저번달에 비해 공복 평균 혈당이 {offset}mg/dl 감소했어요! 잘하고 계시네요.
const AverageGraphToolTip = ({ offset }) => (
  <BalloonContainer>
    <TooltipStyled />
    <TextContainer>
      {offset > 0 ? (
        <>
          <span>저번달에 비해 공복 평균 혈당이 </span> <BSSpan>{offset}mg/dl 증가</BSSpan>
          했어요! <br />
          <br />
          혈당 관리에 조금 더 힘 써주세요.
        </>
      ) : (
        <>
          <span>저번달에 비해 공복 평균 혈당이 </span> <BSSpan>{-1 * offset}mg/dl 감소</BSSpan>
          했어요! <br />
          <br />
          잘하고 계세요!
        </>
      )}
    </TextContainer>
  </BalloonContainer>
);

export default AverageGraphToolTip;
