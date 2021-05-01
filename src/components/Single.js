import React from 'react';
import styled from 'styled-components';

const StyledSingle = styled.div`
  // display: block;
  text-align: center;
  scroll-snap-align: center;
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
  