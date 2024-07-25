import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import './styles/FoodCarousel.css';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

const FoodSlide = ({ slide_index }) => {
  return <StyledDiv>{slide_index}</StyledDiv>;
};

const FoodCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // 자동 슬라이딩
    autoplaySpeed: 2000, // 자동 슬라이딩 시간 간격
    pauseOnHover: true,
    infinite: true,
    cssEase: 'linear',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings}>
      <FoodSlide index={1}></FoodSlide>
      <FoodSlide index={2}></FoodSlide>
      <FoodSlide index={3}></FoodSlide>
      <FoodSlide index={4}></FoodSlide>
      <FoodSlide index={5}></FoodSlide>
      <FoodSlide index={6}></FoodSlide>
      <FoodSlide index={7}></FoodSlide>
      <FoodSlide index={8}></FoodSlide>
    </Slider>
  );
};

const StyledDiv = styled.div`
  border: 1px solid black;
  height: 10rem;
  width: 10rem;
`;

export default FoodCarousel;
