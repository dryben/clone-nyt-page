import React from 'react';
import styled from 'styled-components';

const StyledCover = styled.div`
  background: tomato;
  scroll-snap-align: start;
`;


export const Cover = ({ children, ...props}) => {
    return <StyledCover {...props}>{children}</StyledCover>;
  };
  