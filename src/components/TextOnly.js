import React from 'react';
import styled from 'styled-components';

const StyledTextOnly = styled.div`
  background: white;
  scroll-snap-align: start;
`;


export const TextOnly = ({ children, ...props}) => {
    return <StyledTextOnly {...props}>{children}</StyledTextOnly>;
  };
  