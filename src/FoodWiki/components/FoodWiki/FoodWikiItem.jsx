import styled, { css } from 'styled-components';
import { useState } from 'react';
import ExampleImg from '../../../FoodWiki/assets/exSearchImg.svg?react';
import { useNavigate } from 'react-router-dom';

const bucketName = 'dontspikeimg';
const region = 'ap-southeast-2';

const FoodWikiItem = props => {
  const navigate = useNavigate();

  const handleSearch = () => {
    const fileName = `${props.foodname}.jpg`;
    const url = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
    // setImageUrl(url);
    console.log(url);
  };

  const onItemClick = () => {
    handleSearch();
    navigate(`/foodWiki/search?query=${props.foodname}`);
  };

  return (
    <>
      <InfoWrapper onClick={onItemClick}>
        <FoodImg url={`https://${bucketName}.s3.${region}.amazonaws.com/${props.foodname}.jpg`}></FoodImg>
        <FoodTitle>{props.foodname}</FoodTitle>
      </InfoWrapper>
    </>
  );
};

const InfoWrapper = styled.div`
  cursor: pointer;
  width: 90%;
  margin: 0.8rem;
  padding: 0.2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  &:hover {
    background-color: #fafff2;
  }
`;

const FoodImg = styled.img`
  width: 4.375rem;
  height: 4.375rem;
  flex-shrink: 0;
  object-fit: cover;

  ${props =>
    props.url != ''
      ? css`
          src: url(props.url);
        `
      : css``}
`;
const FoodTitle = styled.div`
  color: #111111;

  font-size: 1rem;
  font-weight: 500;
`;

export default FoodWikiItem;
