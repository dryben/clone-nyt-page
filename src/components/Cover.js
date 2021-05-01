import React from 'react';
import styled from 'styled-components';

const StyledCover = styled.div`
  height: 100vh;
  background: tomato;
  scroll-snap-align: start;
  position:relative;
`;

const Title = styled.h1`
  position: absolute;
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
  // object-fit: cover;
  width: 100%;
`


export const Cover = ({ children, img, ...props}) => {
    img = img || "https://static01.nyt.com/newsgraphics/2021/01/11/economic-nyc-v2/assets/images/0001_20200930_nyt_pandemic_00387-1440_x2.jpg"
    return <StyledCover {...props}>
      <Img src= {img}></Img>
      <Title>
        {children}
      </Title>
      </StyledCover>;
  };
  