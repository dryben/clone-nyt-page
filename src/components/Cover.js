import React from 'react';
import styled from 'styled-components';

const StyledCover = styled.div`
  height: 100vh;
  background: tomato;
  scroll-snap-align: start;
`;


export const Cover = ({ children, ...props}) => {
    return <StyledCover {...props}>{children}</StyledCover>;
  };
  