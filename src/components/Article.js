import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
`;


export const Article = ({ children, ...props}) => {
    return <StyledArticle {...props}>{children}</StyledArticle>;
  };
  