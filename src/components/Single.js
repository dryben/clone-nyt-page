import React from 'react';
import styled from 'styled-components';

const StyledSingle = styled.div`
  height: 100vh;
  text-align: center;
  scroll-snap-align: start;
`;

const StyledImg = styled.img`
  width: 100%;
`

export const Single = ({ children, img, ...props}) => {
    return <StyledSingle {...props}>
      <StyledImg src={img}>

      </StyledImg>
      {children}
      </StyledSingle>;
  };
  