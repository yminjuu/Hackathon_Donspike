import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const FoodCarousel = () => {
  const settings = {
    dots: true,
    autoplay: true, // 자동 슬라이딩
    autoplaySpeed: 5000, // 자동 슬라이딩 시간 간격
    speed: 2000, // 자동 슬라이딩 속도
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <StyledDiv>1</StyledDiv>
      <StyledDiv>2</StyledDiv>
      <StyledDiv>3</StyledDiv>
      <StyledDiv>4</StyledDiv>
      <StyledDiv>5</StyledDiv>
      <StyledDiv>6</StyledDiv>
      <StyledDiv>7</StyledDiv>
      <StyledDiv>8</StyledDiv>
      <StyledDiv>9</StyledDiv>
    </Slider>
  );
};

const StyledDiv = styled.div`
  border: 1px solid black;
  height: 100px;
`;

export default FoodCarousel;
