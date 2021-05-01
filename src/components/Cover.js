import React from 'react';
import styled from 'styled-components';
import {Slide} from './Slide'

const StyledCover = styled.div`
  height: 100vh;
  background: gray;
  scroll-snap-align: start;
  position:relative;

  figcaption {
    position: absolute;
    left: auto;
    bottom: 12px;
    right: 24px;
    color: white;
  }
`;

const Title = styled.h1`
  position: absolute;
  left: 20px;
  max-width: 80vw;
  height: 80vh;
  max-height: none;
  font-size: 12vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 12vh;
`
const Img = styled.img`
  position: absolute;
  height: 100%;
  max-height: 100vh;
  object-fit: cover;
  width: 100%;
`


export const Cover = ({ children, img, when, about, ...props}) => {
    // img = img || "https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0001_20200930_nyt_pandemic_00387-1440_x2.jpg"
    let background = img?
      <Img src= {img}></Img>
      : <Slide></Slide>
    let figcaption = about? 
      <figcaption><p><strong>{when}</strong></p><p>  {about}</p></figcaption> 
      : ''
    return <StyledCover {...props}>
      {/* <SlideFade></SlideFade> */}
      {/* <Img src= {img}></Img> */}
      {background}
      <Title>
        {children}
      </Title>
      {figcaption}
      </StyledCover>;
  };
  