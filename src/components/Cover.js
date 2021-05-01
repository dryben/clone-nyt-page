import React from 'react';
import styled from 'styled-components';

const StyledCover = styled.div`
  background: tomato;
  display: flex;
  flex-direction: column;
`;


export const Cover = ({ children, ...props}) => {
    return <StyledCover {...props}>{children}</StyledCover>;
  };
  