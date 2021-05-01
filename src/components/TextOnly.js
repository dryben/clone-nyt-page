import React from 'react';
import styled from 'styled-components';

const StyledTextOnly = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
`;


export const TextOnly = ({ children, ...props}) => {
    return <StyledTextOnly {...props}>{children}</StyledTextOnly>;
  };
  