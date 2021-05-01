import React from 'react';
import styled from 'styled-components';

const StyledSingle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  scroll-snap-align: start;
`;

const StyledImg = styled.img`
  width: 72vw;
  margin: 0 0 0 auto;
`

const StyledCaption = styled.div`
  top: 12px;
  left: 24px;
  bottom: auto;
  flex: 1;
`

export const Single = ({ children, img, when, about, ...props}) => {
    return <StyledSingle {...props}>
      <StyledImg src={img}>

      </StyledImg>
      <StyledCaption>
        <p><strong>{when}</strong></p>
        <p>{about}</p>
        {children}
      </StyledCaption>
      </StyledSingle>;
  };
  