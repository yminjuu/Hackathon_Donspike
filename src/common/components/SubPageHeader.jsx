import { css, styled } from 'styled-components';
import Logo from '../components/LogoButton';
import LogoButton from '../components/LogoButton';
import { useNavigate } from 'react-router-dom';

const SubPageHeader = ({ type }) => {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate(-1); //뒤로가기
  };

  return (
    <HeaderWrapper $type={type}>
      <LogoButton></LogoButton>
      {/* x 버튼 svg 태그 */}
      <ButtonWrapper onClick={onBtnClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M15 1.03955L1.08631 14.9998" stroke="#414141" strokeWidth="1.96769" strokeLinecap="round" />
          <path d="M14.9136 14.9604L0.999885 1.00018" stroke="#414141" strokeWidth="1.96769" strokeLinecap="round" />
        </svg>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  ${props =>
    props.$type === 'FoodInfo'
      ? // 현재 state가 해당 버튼이 눌린 상태라면
        css`
          background-color: #fafff2;
          height: 3rem;
        `
      : css`
          background-color: #ffffff;
        `};
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SubPageHeader;
