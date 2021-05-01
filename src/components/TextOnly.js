import React from 'react';
import styled from 'styled-components';

const StyledTextOnly = styled.div`
  height: 100vh;
  background: white;
  scroll-snap-align: start;

  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  justify-content: center;

  
  p {
    width: calc(100% - 40px);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    font-size: 25px;
  }
  em {
    font-size: 15px;
  }
  strong {
    font-size: 15px;
    display: block;
  }
`;


export const TextOnly = ({ children, ...props}) => {
    return <StyledTextOnly {...props}>{children}</StyledTextOnly>;
  };
  