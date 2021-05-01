import React from 'react';
import styled from 'styled-components';

const StyledSingle = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`

`

export const Single = ({ children, img, ...props}) => {
    return <StyledSingle {...props}>
      <StyledImg src={img}>

      </StyledImg>
      {children}
      </StyledSingle>;
  };
  