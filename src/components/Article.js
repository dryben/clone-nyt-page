import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;


export const Article = ({ children, ...props}) => {
    return <StyledArticle {...props}>{children}</StyledArticle>;
  };
  